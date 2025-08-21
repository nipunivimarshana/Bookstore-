# bookstore/views.py
from rest_framework import generics
from .models import Book
from .serializers import BookSerializer

# This view will handle requests for a LIST of all books.
class BookListAPIView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

# This view will handle requests for a SINGLE, specific book.
class BookDetailAPIView(generics.RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    lookup_field = 'pk' # 'pk' means "primary key", the book's ID
    