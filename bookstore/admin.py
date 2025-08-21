# bookstore/admin.py
from django.contrib import admin
from .models import Book, Author, Category

# This is the workaround for the Djongo v1.3.6 bug
class BookAdmin(admin.ModelAdmin):
    raw_id_fields = ('author', 'categories',)

admin.site.register(Author)
admin.site.register(Category)
admin.site.register(Book, BookAdmin)