# bookstore/admin.py

from django.contrib import admin
from django.core.files.base import ContentFile
from .models import Book, Author, Category
from import_export.admin import ImportExportModelAdmin
# This line below is the crucial import that was missing or got deleted
from import_export import resources, fields, widgets
import requests

# --- WIDGETS (Helper classes for the importer) ---
class AuthorWidget(widgets.ForeignKeyWidget):
    def get_queryset(self, value, row, *args, **kwargs):
        return self.model.objects.filter(name__iexact=value)

    def clean(self, value, row=None, *args, **kwargs):
        if value:
            return self.model.objects.get_or_create(name=value)[0]
        return None

class CategoryWidget(widgets.ForeignKeyWidget):
    def get_queryset(self, value, row, *args, **kwargs):
        return self.model.objects.filter(name__iexact=value)
            
    def clean(self, value, row=None, *args, **kwargs):
        if value:
            from django.utils.text import slugify
            slug = slugify(value)
            return self.model.objects.get_or_create(name=value, defaults={'slug': slug})[0]
        return None

# --- RESOURCE (The main logic for importing) ---
class BookResource(resources.ModelResource):
    # Explicitly declare fields to match CSV headers
    BookID = fields.Field(column_name='BookID', attribute='book_id')
    BookName = fields.Field(column_name='BookName', attribute='title')
    Author = fields.Field(column_name='Author', attribute='author', widget=AuthorWidget(Author, 'name'))
    Category = fields.Field(column_name='Category', attribute='category', widget=CategoryWidget(Category, 'name'))
    Price = fields.Field(column_name='Price', attribute='price')
    ImageURL = fields.Field(column_name='ImageURL', attribute='image')
    
    # Explicitly declare the 'stock' field with a default value
    stock = fields.Field(attribute='stock', default=50)
    
    class Meta:
        model = Book
        import_id_fields = ['BookID']
        skip_existing = True
        report_skipped = True
        # List all fields the resource should handle
        fields = ('BookID', 'BookName', 'Author', 'Category', 'Price', 'ImageURL', 'stock')

    def before_save(self, instance, using_transactions, dry_run):
        # Handle the image download
        image_url = instance.image
        
        if image_url and isinstance(image_url, str):
            try:
                response = requests.get(image_url, stream=True)
                if response.status_code == 200:
                    instance.image = None
                    instance.image.save(f"{instance.book_id}.jpg", ContentFile(response.content), save=False)
            except requests.exceptions.RequestException:
                instance.image = None

# --- ADMIN CLASSES (How models are displayed in the admin panel) ---
class BookAdmin(ImportExportModelAdmin):
    resource_class = BookResource
    list_display = ('title', 'book_id', 'author', 'category', 'price', 'stock')
    search_fields = ('title', 'author__name')

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    list_display = ('name', 'slug')

class AuthorAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    list_display = ('name',)

# --- REGISTRATION (Telling Django to show the models in the admin) ---
admin.site.register(Author, AuthorAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Book, BookAdmin)
