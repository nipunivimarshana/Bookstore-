# bookstore/models.py

from django.db import models

# --- CATEGORY MODEL ---
# Defines the genre or category of a book.
class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(unique=True, help_text="A short, URL-friendly version of the name.")

    class Meta:
        verbose_name_plural = "Categories" # Fixes the pluralization in the admin panel

    def __str__(self):
        return self.name

# --- AUTHOR MODEL ---
# Defines the author of a book.
class Author(models.Model):
    name = models.CharField(max_length=255, unique=True)
    bio = models.TextField(blank=True, null=True, help_text="A brief biography of the author.")

    def __str__(self):
        return self.name

# --- BOOK MODEL ---
# This is the central model, linking all the information together. It is now
# correctly designed to accept the data from your CSV file.
class Book(models.Model):
    # This field will store your unique BookID like "B001" from the CSV
    book_id = models.CharField(max_length=10, unique=True, null=True, blank=True)
    
    title = models.CharField(max_length=255)
    
    # This creates a many-to-one relationship with the Author model.
    # It correctly links a Book object to an Author object.
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name="books")
    
    # This creates a many-to-one relationship with the Category model.
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="books")

    price = models.DecimalField(max_digits=6, decimal_places=2)
    
    # This field will store the stock count. We will add a default value in the importer.
    stock = models.PositiveIntegerField(default=0)

    # This field will store the downloaded images. 'upload_to' specifies the sub-folder.
    image = models.ImageField(upload_to='book_images/', null=True, blank=True)

    def __str__(self):
        return self.title
    
    