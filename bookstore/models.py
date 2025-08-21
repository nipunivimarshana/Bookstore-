# books/models.py

from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, help_text="A short, URL-friendly version of the name.")

    class Meta:
        verbose_name_plural = "Categories" # Fixes the pluralization in the admin panel

    def __str__(self):
        return self.name

class Author(models.Model):
    name = models.CharField(max_length=255)
    bio = models.TextField(blank=True, null=True, help_text="A brief biography of the author.")

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    isbn = models.CharField(max_length=13, unique=True)
    stock_count = models.PositiveIntegerField(default=0)
    cover_image_url = models.URLField(blank=True, null=True)
    # Use a CharField for the related field name to be compatible with Djongo
    categories = models.ManyToManyField(Category, related_name='books')

    def __str__(self):
        return self.title
    
    