# 📚 Bookstore E-Commerce Platform

A modern, full-stack e-commerce platform for book sales built with Django REST Framework backend and React frontend.

## 🌟 Features

### 🛒 Shopping Experience
- **Book Catalog**: Browse through a comprehensive collection of books
- **Shopping Cart**: Add/remove items, update quantities, view totals
- **Book Details**: Detailed book information with images, descriptions, and specifications
- **Search & Filter**: Find books by title, author, or genre
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 User Interface
- **Modern Design**: Clean, intuitive interface with dark theme support
- **Interactive Components**: Smooth animations and hover effects
- **Shopping Cart Icon**: Real-time cart count with badge notifications
- **Progress Indicators**: Visual feedback for checkout process
- **Error Handling**: User-friendly error messages and loading states

### 🔧 Technical Features
- **RESTful API**: Django REST Framework backend
- **State Management**: React Context for global cart state
- **Routing**: React Router for seamless navigation
- **Image Handling**: Optimized book cover images with fallbacks
- **Data Validation**: Comprehensive form validation and error handling

## 🏗️ Architecture

### Backend (Django)
```
Bookstore-/
├── config/                 # Django project settings
├── bookstore/              # Main app
│   ├── models.py          # Database models
│   ├── views.py           # API views
│   ├── serializers.py     # Data serialization
│   ├── urls.py            # URL routing
│   └── management/        # Custom management commands
├── media/                  # Static media files
├── requirements.txt        # Python dependencies
└── manage.py              # Django management script
```

### Frontend (React)
```
frontend/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── context/          # React Context providers
│   ├── types/            # TypeScript type definitions
│   └── assets/           # Static assets
├── public/               # Public assets
└── package.json          # Node.js dependencies
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Bookstore-
   ```

2. **Create and activate virtual environment**
   ```bash
   python -m venv venv
   
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations**
   ```bash
   python manage.py migrate
   ```

5. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Seed sample data (optional)**
   ```bash
   python manage.py seed_data
   ```

7. **Start the development server**
   ```bash
   python manage.py runserver
   ```
   The backend will be available at `http://127.0.0.1:8000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

## 📖 User Guide

### 🏠 Homepage
- **Hero Section**: Welcome message and featured content
- **Featured Books**: Highlighted book recommendations
- **Navigation**: Access to all sections via header menu

### 🛍️ Store
- **Book Grid**: Browse all available books
- **Book Cards**: Each card shows:
  - Book cover image
  - Title and author
  - Price
  - "Add to Cart" button
  - Wishlist heart icon
- **Search**: Use the search bar to find specific books
- **Book Details**: Click on any book to view detailed information

### 🛒 Shopping Cart
- **Add Items**: Click "ADD TO CART" on any book
- **View Cart**: Click the cart icon in the header
- **Cart Features**:
  - View all items with images and details
  - Update quantities using +/- buttons
  - Remove items with the × button
  - See real-time totals
  - Apply coupon codes
  - Proceed to checkout
- **Continue Shopping**: Return to store to add more items

### 📱 Responsive Design
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Optimized layout with touch-friendly controls
- **Mobile**: Streamlined interface with collapsible navigation

## 🔧 API Documentation

### Endpoints

#### Books
- `GET /api/books/` - List all books
- `GET /api/books/{id}/` - Get book details
- `POST /api/books/` - Create new book (admin only)
- `PUT /api/books/{id}/` - Update book (admin only)
- `DELETE /api/books/{id}/` - Delete book (admin only)

#### Authors
- `GET /api/authors/` - List all authors
- `GET /api/authors/{id}/` - Get author details

### Data Models

#### Book
```json
{
  "id": 1,
  "title": "Book Title",
  "author": {
    "id": 1,
    "name": "Author Name",
    "bio": "Author biography"
  },
  "price": 29.99,
  "description": "Book description",
  "isbn": "978-1234567890",
  "publication_date": "2023-01-01",
  "pages": 300,
  "language": "English",
  "genre": "Fiction",
  "cover_image_url": {
    "url": "/media/book_images/book.jpg"
  }
}
```

## 🛠️ Development

### Backend Development

1. **Database Models**: Define in `bookstore/models.py`
2. **API Views**: Create in `bookstore/views.py`
3. **Serializers**: Define in `bookstore/serializers.py`
4. **URLs**: Configure in `bookstore/urls.py`

### Frontend Development

1. **Components**: Create reusable components in `src/components/`
2. **Pages**: Build page components in `src/pages/`
3. **Context**: Manage global state in `src/context/`
4. **Styling**: Use CSS modules for component-specific styles

### Code Style
- **Python**: Follow PEP 8 guidelines
- **JavaScript/TypeScript**: Use ESLint configuration
- **CSS**: Use consistent naming conventions

## 🧪 Testing

### Backend Testing
```bash
python manage.py test
```

### Frontend Testing
```bash
cd frontend
npm run lint
npm run build
```

## 📦 Deployment

### Backend Deployment
1. Set up production database (PostgreSQL recommended)
2. Configure environment variables
3. Run migrations
4. Collect static files
5. Deploy with Gunicorn or similar WSGI server

### Frontend Deployment
1. Build production bundle
   ```bash
   npm run build
   ```
2. Deploy `dist/` folder to static hosting service
3. Configure API endpoints for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed description
3. Contact the development team

## 🎯 Roadmap

### Version 1.1
- [ ] User authentication and profiles
- [ ] Order management system
- [ ] Payment integration
- [ ] Email notifications

### Version 1.2
- [ ] Advanced search and filtering
- [ ] Book reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard

### Version 2.0
- [ ] Mobile app (React Native)
- [ ] Real-time chat support
- [ ] Advanced analytics
- [ ] Multi-language support

## 👥 Team

- **Backend Developer**: Django REST Framework, Database Design
- **Frontend Developer**: React, TypeScript, UI/UX Design
- **DevOps Engineer**: Deployment, CI/CD, Infrastructure

---

**Built with ❤️ using Django and React**
