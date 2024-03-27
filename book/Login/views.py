from django.http import Http404
from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .models import (
    Contact,
    DeletedContacts,
    Fav_contacts,
    DeletedContacts,
    Feature_Flag,
)
from rest_framework.response import Response
from .serializers import (
    UserSerializer,
    contactSerializer,
    FavSerializer,
    DeletedSerializer,
    FeatureSerializer,
    FeaturePatchSerializer,
)
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.exceptions import UnsupportedMediaType


# Create your views here.


class Login(APIView):

    def get(self, request):

        if request.user.is_anonymous:
            return Response(
                {"error": "User not logged in"}, status=status.HTTP_400_BAD_REQUEST
            )

        username = request.user.username
        password = request.user.password
        return Response(
            {"username": username, "password": password}, status=status.HTTP_200_OK
        )

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response(
                {"message": "Logged in successfully"}, status=status.HTTP_200_OK
            )
        else:
            return Response(
                {"error": "Invalid username or password"},
                status=status.HTTP_400_BAD_REQUEST,
            )


class Logout(APIView):
    def get(self, request):
        logout(request)
        return Response(
            {"message": "Logged out successfully"}, status=status.HTTP_200_OK
        )


class Users(APIView):

    def get(self, request):
        user = get_user_model()
        res = user.objects.all()
        serializer = UserSerializer(res, many=True)

        return Response(serializer.data, status=200)

    def post(self, request):
        user = get_user_model()
        data = request.data
        username = data.get("username")
        password = data.get("password")
        user.objects.create_user(username=username, password=password)

        return Response(data, status=201)


class contacts(APIView):
    def get(self, request, user):
        try:
            user_id = get_user_model().objects.get(username=user)
            res = Contact.objects.filter(user=user_id)
            serializer = contactSerializer(res, many=True)

            return Response(serializer.data, status=200)

        except Exception as e:

            return Response({"error": str(e)}, status=200)

    def post(self, request):

        try:
            data = request.data
            user = request.user

            if isinstance(data, list):
                for item in data:
                    contact_name = item.get("contact_name")
                    contact_number = item.get("contact_number")
                    country_code = item.get("country_code")
                    Contact.objects.create(
                        user=user,
                        contact_name=contact_name,
                        contact_number=contact_number,
                        country_code=country_code,
                    )
            else:
                contact_name = data.get("contact_name")
                contact_number = data.get("contact_number")
                country_code = data.get("country_code")
                Contact.objects.create(
                    user=user,
                    contact_name=contact_name,
                    contact_number=contact_number,
                    country_code=country_code,
                )

            res = Contact.objects.all()
            serializer = contactSerializer(res, many=True)
            return Response(serializer.data, status=200)

        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def delete(self, request, user):
        try:
            user_ins = get_user_model().objects.get(username=user)
            data = request.data.get("checkedContacts", [])

            responses = []
            for contact_id in data:

                try:
                    contact = Contact.objects.get(id=contact_id)
                    DeletedContacts.objects.create(
                        user=user_ins,
                        contact_name=contact.contact_name,
                        contact_number=contact.contact_number,
                        country_code=contact.country_code,
                    )

                    deleted_contact = contact.contact_number
                    contact.delete()
                    responses.append(deleted_contact)

                except Exception as e:
                    responses.append(
                        {
                            "error": f"Failed to delete contact {contact_id}: {str(e)}"
                        }
                    )

            return Response(
                {
                    "message": responses,
                },
                status=200,
            )

        except UnsupportedMediaType as e:
            return Response({"error": str(e)}, status=400)


class contactDetail(APIView):

    def get(self, request, contact_number):
        try:
            contact = Contact.objects.get(contact_number=contact_number)
            serializer = contactSerializer(contact, many=False)
            return Response(serializer.data, status=200)

        except Contact.DoesNotExist:
            return Response({"error": "Contact not found"}, status=404)

    def delete(self, request, contact_number):
        try:
            contact = Contact.objects.get(contact_number=contact_number)
            DeletedContacts.objects.create(
                user=contact.user,
                contact_name=contact.contact_name,
                contact_number=contact_number,
                country_code=contact.country_code,
            )
            contact.delete()
            return Response(
                {
                    "Message": "Contact Number: { "
                    + contact_number
                    + " } Deleted Successfully"
                },
                status=204,
            )
        except:
            return Response({"error": "${contact_number} is  not deleted"}, status=404)


class Favourites_view(APIView):

    def get(self, request, user):

        user_pk = get_user_model().objects.get(username=user)
        res = Fav_contacts.objects.filter(user=user_pk)
        list = []

        for item in res:
            fav_contact_key = item.fav_Contacts.id
            contact = get_object_or_404(Contact, id=fav_contact_key)
            list.append(contact)

        serializer = contactSerializer(list, many=True)

        return Response(serializer.data)


class Favourites_view_Post(APIView):

    def post(self, request, user_pk):
        try:
            user = request.user
            contact_ids = request.data

            if isinstance(contact_ids, list):
                for contact_id in contact_ids:
                    contact = get_object_or_404(Contact, id=contact_id)
                    Fav_contacts.objects.create(user=user, fav_Contacts=contact)
            else:
                contact = get_object_or_404(Contact, id=contact_ids)
                Fav_contacts.objects.create(user=user, fav_Contacts=contact)

            res = Fav_contacts.objects.all()
            return Response(res, status=200)

        except Exception as e:
            return Response({"error": str(e)}, status=400)


class Deleted_view(APIView):
    def get(self, request, user):
        user_id = get_user_model().objects.get(username=user)
        res = DeletedContacts.objects.filter(user=user_id)
        serializer = DeletedSerializer(res, many=True)

        return Response(serializer.data, status=200)


class Feature_view(APIView):

    def get(self, request):
        res = Feature_Flag.objects.all()
        serializer = FeatureSerializer(res, many=True)

        return Response(serializer.data, status=200)


class Feature_Patch_View(APIView):

    def get(self, request, user):
        try:
            user_id = get_user_model().objects.get(username=user)
            res = Feature_Flag.objects.get(user=user_id)
            serializer = FeaturePatchSerializer(res)
            return Response(serializer.data, status=200)

        except Feature_Flag.DoesNotExist:
            return Response({"error": "User not found"}, status=400)

    def patch(self, request, user):
        try:
            user_id = get_user_model().objects.get(username=user)
            feature_flag = get_object_or_404(Feature_Flag, user=user_id)
            serializer = FeaturePatchSerializer(
                feature_flag, data=request.data, partial=True
            )
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            else:
                return Response(serializer.errors, status=400)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
