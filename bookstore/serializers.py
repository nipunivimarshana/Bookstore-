# bookstore/serializers.py
from rest_framework import serializers
from .models import Book, Author, Category

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['name', 'bio']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'slug']

class BookSerializer(serializers.ModelSerializer):
    # These lines tell DRF to use the serializers we defined above
    # for the related author and categories, making our API output rich with data.
    author = AuthorSerializer(read_only=True)
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Book
        # '__all__' is a shortcut to include all fields from the model
        fields = '__all__'