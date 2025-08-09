from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    """Home page view for the bookstore"""
    return render(request, 'bookstore/home.html')

def login(request):
    """Login page view"""
    return render(request, 'bookstore/login.html')

def register(request):
    """Register page view"""
    return render(request, 'bookstore/register.html')
