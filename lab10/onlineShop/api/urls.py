from django.urls import path
from api.views import (
    ProductListAPIView, ProductDetailAPIView,
    CategoryListAPIView, CategoryDetailAPIView,
    CategoryProductsAPIView
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()), # Используем product_id
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products/', CategoryProductsAPIView.as_view()),
]