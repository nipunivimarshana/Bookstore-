from django.contrib import admin
from .models import Book, Author, Category

# Register your models here.

admin.site.register(Author)
admin.site.register(Category)
admin.site.register(Book, BookAdmin)