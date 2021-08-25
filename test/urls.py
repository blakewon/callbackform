from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("home/", views.home, name="home"),
    path("create/" , views.create, name="create"),
    path("create_success/", views.create_success, name="create_success"),
    path("list/", views.list, name="list")
]