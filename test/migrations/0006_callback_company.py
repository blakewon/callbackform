# Generated by Django 3.2.6 on 2021-08-25 03:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('test', '0005_callback_creation_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='callback',
            name='company',
            field=models.CharField(max_length=200, null=True),
        ),
    ]