from django.contrib import admin
from django.urls import path
from django.urls import include
from Login import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Login.urls')),
]
