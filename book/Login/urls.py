from Login import views
from django.urls import path


urlpatterns = [
    
    path('Login/', views.Login.as_view()),
    path('Logout/', views.Logout.as_view()),
    
    path('users/', views.Users.as_view()),
    path('contact/<str:contact_number>/',  views.contactDetail.as_view() ),
    path('AllUsers/settings/', views.Feature_view.as_view()),
    
    path('user/<str:user>/deleted/' , views.Deleted_view.as_view() ),
    path('user/<str:user>/contacts/', views.contacts.as_view()),
    path('user/<str:user>/favourites/', views.Favourites_view.as_view()),
    path('user/<str:user>/settings/', views.Number_feature_view.as_view()),

    
]
