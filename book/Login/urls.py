from Login import views
from django.urls import path


urlpatterns = [
    path('users/', views.Users.as_view()),
    path('contacts/', views.contacts.as_view()),
    path('contact/<str:contact_number>/',  views.contactDetail.as_view() ),
]
