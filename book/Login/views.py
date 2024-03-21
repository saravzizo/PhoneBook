from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from .models import Contact , DeletedContacts
from rest_framework.response import Response
from .serializers import UserSerializer , contactSerializer, contactNumSerializer

# Create your views here.
class Users(APIView):

    def get(self, request):
        user = get_user_model()
        res = user.objects.all()
        serializer = UserSerializer(res,many=True)
    
        return Response(serializer.data)
    
    def post(self,request):
        user = get_user_model()
        data = request.data
        username = data.get('username')
        password = data.get('password')
        user.objects.create_user(username=username,password=password)
        
        return Response(data,status=201)
        
        
class contacts(APIView):
    def get(self ,request):
        res = Contact.objects.all()
        serializer = contactSerializer(res,many=True)

        return Response(serializer.data)
    
    
    def post(self,request):
        data = request.data
        user = request.user
        
        if isinstance(data, list): 
            for item in data:
                contact_name = item.get('contact_name')
                contact_number = item.get('contact_number')
                Contact.objects.create(user=user, contact_name=contact_name, contact_number=contact_number)
        else: 
            contact_name = data.get('contact_name')
            contact_number = data.get('contact_number')
            Contact.objects.create(user=user, contact_name=contact_name, contact_number=contact_number)
            
        
        
        return Response(data, status=200)
    
    
    
    
class contactDetail(APIView):
    def get(self, request,contact_number):
        try:
            contact = Contact.objects.get(contact_number = contact_number)
            serializer = contactNumSerializer(contact,many=False)
            return Response(serializer.data, status=200)
        
        except Contact.DoesNotExist:
            return Response({'error': 'Contact not found'}, status=404)
    
    def delete(self, request, contact_number):
        try:
            contact = Contact.objects.get(contact_number = contact_number)
            
            DeletedContacts.objects.create(user = contact.user, contact_name = contact.contact_name, contact_number = contact_number)
            contact.delete()
            return Response({"Message": "Contact Number: { "+contact_number+" } Deleted Successfully"}, status=204)
        
        except:
            return Response({'error':"${contact_number} is  not deleted"}, status=404)