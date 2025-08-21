from django.core.management.base import BaseCommand
from bookstore.models import Author, Category, Book

class Command(BaseCommand):
    help = 'Seeds the database with initial data'

    def handle(self, *args, **kwargs):
        self.stdout.write('Deleting existing data...')
        # Clear out the database to start fresh
        Book.objects.all().delete()
        Author.objects.all().delete()
        Category.objects.all().delete()

        self.stdout.write('Creating new data...')

        # Create Categories
        cat_fantasy = Category.objects.create(name='Fantasy', slug='fantasy')
        cat_scifi = Category.objects.create(name='Science Fiction', slug='science-fiction')

        # Create Authors
        author_tolkien = Author.objects.create(name='J.R.R. Tolkien', bio='English writer, poet, and philologist.')
        author_asimov = Author.objects.create(name='Isaac Asimov', bio='American writer and professor of biochemistry.')

        # Create Books
        book1 = Book.objects.create(
            title='The Hobbit',
            author=author_tolkien,
            description='A fantasy novel about the adventures of hobbit Bilbo Baggins.',
            price=14.99,
            isbn='9780547928227',
            stock_count=50
        )
        book1.categories.add(cat_fantasy)

        book2 = Book.objects.create(
            title='I, Robot',
            author=author_asimov,
            description='A collection of nine science fiction short stories.',
            price=12.50,
            isbn='9780553382563',
            stock_count=30
        )
        book2.categories.add(cat_scifi)

        book3 = Book.objects.create(
            title='The Lord of the Rings',
            author=author_tolkien,
            description='An epic high-fantasy novel.',
            price=29.99,
            isbn='9780618640157',
            stock_count=25
        )
        book3.categories.add(cat_fantasy)


        self.stdout.write(self.style.SUCCESS('Successfully seeded the database.'))