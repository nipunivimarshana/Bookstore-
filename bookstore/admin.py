from django.contrib import admin
from .models import Book, Author, Category

# --- Admin configuration for Category ---
class CategoryAdmin(admin.ModelAdmin):
    # This line tells Django to automatically create the slug from the name field
    prepopulated_fields = {'slug': ('name',)}
    list_display = ('name', 'slug') # Optional: makes the list view nicer

# --- Admin configuration for Book ---
class BookAdmin(admin.ModelAdmin):
    # You can add customizations for the Book model here later
    pass
    
# --- Admin configuration for Author ---
# We can also add one for Author if it has a slug field
class AuthorAdmin(admin.ModelAdmin):
    # If your Author model has a 'slug' and 'name' field, uncomment the line below
    # prepopulated_fields = {'slug': ('name',)}
    list_display = ('name',) # A simple list display for authors

# --- Register the models with their custom admin classes ---
admin.site.register(Category, CategoryAdmin)
admin.site.register(Author, AuthorAdmin)
admin.site.register(Book, BookAdmin)
