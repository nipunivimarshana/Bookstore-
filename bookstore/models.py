# books/models.py

from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, help_text="A short, URL-friendly version of the name.")

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

# --- CHECK THIS CLASS VERY CAREFULLY ---
class Author(models.Model):
    name = models.CharField(max_length=255)
    bio = models.TextField(blank=True, null=True, help_text="A brief biography of the author.")

    def __str__(self):
        return self.name
# -----------------------------------------

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
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    published_date = models.DateField()

    def __str__(self):
        return self.title
