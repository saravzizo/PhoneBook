from Login import views
from django.urls import path


urlpatterns = [
    path('users/', views.Users.as_view()),
    path('contacts/', views.contacts.as_view()),
    path('contact/<str:contact_number>/',  views.contactDetail.as_view() ),
    path('contacts/favourites/', views.Favourites_view_Post.as_view()),
    path('contacts/deleted/' , views.Deleted_view.as_view() ),
    
    path('AllUsers/settings/', views.Feature_view.as_view()),
    path('user/<int:user_pk>/favourites/', views.Favourites_view.as_view()),
    path('user/<int:user_pk>/settings/', views.Feature_Patch_View.as_view()),

    
]
