from test.models import CallBack
from django.shortcuts import render
from django.http import HttpResponse
from .forms import create_new_list


# Create your views here.

def home(response):
    return render(response, "test/home.html")

def create(response):
    form = create_new_list()
    return render(response, "test/create.html", {"form" : form})

def list(response):
    if response.method == "POST":
        print("Printing post: ", response.POST)

        if "archived" in response.POST:
            CallBack.objects.filter(pk=response.POST['pk']).update(archived = response.POST["archived"])

        if "comment" in response.POST:
            CallBack.objects.filter(pk=response.POST['pk']).update(comment = response.POST["comment"])

    callbacks = CallBack.objects.all()
    return render(response, 'test/list.html', {'callbacks': callbacks})


def create_success(response):
    if response.method == "POST":
        print("Printing post: ", response.POST)
        form = create_new_list(response.POST)

        #form validation
        if form.is_valid():
            #extract data from form submition
            f_name = form.cleaned_data["name"]
            f_phone_number = form.cleaned_data["phone_number"]
            f_email = form.cleaned_data["email"]
            f_company = form.cleaned_data["company"]
            f_subject = form.cleaned_data["subject"]

            if "date_field" in response.POST:
                f_date_field = form.cleaned_data["date_field"]
            else:
                f_date_field = ""
            
            if "time_field" in response.POST:
                f_time_field = response.POST["time_field"]
            else:
                f_time_field = ""

            f_problem_description = form.cleaned_data["problem_description"]

            #construct callback model for database
            t = CallBack(name= f_name, phone_number = f_phone_number, 
            email = f_email,company = f_company ,subject = f_subject, date_field = f_date_field, time_field = f_time_field,
            problem_description = f_problem_description)

            #saving model
            t.save()
    else:
        form = create_new_list()
    return render(response, "test/create_success.html")

def test(response):
    return render(response, "test/test.html")