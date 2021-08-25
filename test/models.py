from django.db import models
from django.db.models.fields.related import ForeignKey
from django.forms.fields import CharField
from .forms import DATE_INPUT_FORMATS

class ToDoList(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Item(models.Model):
    call = models.ForeignKey(ToDoList, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)
    complete = models.BooleanField()
    def __str__(self):
        return self.text


class CallBack(models.Model):
    name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)
    company = models.CharField(max_length=200, null=True)
    email = models.EmailField(max_length=400)
    subject = models.CharField(max_length=200)
    date_field = models.DateField(max_length=20, null=True)
    time_field = models.CharField(max_length=20, null=True)
    problem_description = models.CharField(max_length=600)
    comment = models.CharField(max_length=500)
    archived = models.BooleanField(default=False)
    creation_date = models.DateTimeField(auto_now_add=True, blank=True)