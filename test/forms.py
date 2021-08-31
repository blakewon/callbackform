from django import forms
from django.forms.fields import DateTimeField, TimeField
from django.forms.widgets import ChoiceWidget, Select, SelectDateWidget, SelectMultiple, TextInput, TimeInput

DATE_INPUT_FORMATS = ['%d/%m/%Y']

class datePicker(forms.TextInput):
    pass


class timePicker(forms.TextInput):
    name = "time"

class create_new_list(forms.Form):
    name = forms.CharField(label="Name (required)", max_length=200, required=True)
    company = forms.CharField(label="Company", max_length=200, required=False, initial="")
    phone_number = forms.CharField(label="Phone Number", max_length=200, required=False, initial="")
    email = forms.EmailField(label="Email", max_length=100, required=True)
    subject = forms.CharField(label="Subject", max_length=200, required=True)
    date_field = forms.DateField(label="Date for callback (dd/mm/yyy)" ,widget=datePicker, required=False, input_formats=DATE_INPUT_FORMATS, initial="")
    time_field = forms.CharField(required = False ,label= "Preferred time for callback (24:00)", widget=forms.Select, disabled=True)
    problem_description = forms.CharField(widget=forms.Textarea, required=True)


"""
• Name (required)
• Phone number (NOT required)
• Company (NOT required)
• Email (required)
• Subject (required)
• Problem description (required)
• Date and time for callback (NOT required)
"""