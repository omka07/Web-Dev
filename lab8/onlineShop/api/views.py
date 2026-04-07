from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.core.paginator import Paginator
from .models import Product, Category

# Create your views here.
def products_list(request):
    products = Product.objects.all().order_by('id')
    limit = request.GET.get('limit', 2)
    try:
        limit = int(limit)
    except ValueError:
        limit=2
    paginator = Paginator(products, limit)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    data = [product.to_json() for product in page_obj.object_list]
    response_data = {
        'count': paginator.count,
        'num_pages': paginator.num_pages,
        'current_page': page_obj.number,
        'has_next': page_obj.has_next(),
        'has_previous': page_obj.has_previous(),
        'results': data
    }
    return JsonResponse(response_data, safe=False)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = product.to_json()
    return JsonResponse(data)

def categories_list(request):
    categories = Category.objects.all()
    data = [category.to_json() for category in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = category.to_json()
    return JsonResponse(data)

def catgory_products(request, id):
    category = get_object_or_404(Category,id=id)
    products = Product.objects.filter(category=category)
    data = [product.to_json() for product in products]
    return JsonResponse(data, safe=False)