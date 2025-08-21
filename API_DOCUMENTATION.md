# Bookstore API Documentation

This document explains how to get data from the Django backend.

---

### 1. Get a List of All Books

This endpoint retrieves every book currently in the database.

- **URL:** `/api/books/`
- **Method:** `GET`
- **Full URL for Local Development:** `http://127.0.0.1:8000/api/books/`

#### Sample JSON Response:
This is an example of the data you will receive. It will be a list `[...]` of book objects `{...}`.

```json
[
    {
        "id": 1,
        "author": {
            "name": "J.R.R. Tolkien",
            "bio": "English writer, poet, and philologist."
        },
        "categories": [
            {
                "name": "Fantasy",
                "slug": "fantasy"
            }
        ],
        "title": "The Hobbit",
        "description": "A fantasy novel about the adventures of hobbit Bilbo Baggins.",
        "price": "14.99",
        "isbn": "9780547928227",
        "stock_count": 50,
        "cover_image_url": null
    },
    {
        "id": 2,
        "author": {
            "name": "Isaac Asimov",
            "bio": "American writer and professor of biochemistry."
        },
        "categories": [
            {
                "name": "Science Fiction",
                "slug": "science-fiction"
            }
        ],
        "title": "I, Robot",
        "description": "A collection of nine science fiction short stories.",
        "price": "12.50",
        "isbn": "9780553382563",
        "stock_count": 30,
        "cover_image_url": null
    }
]