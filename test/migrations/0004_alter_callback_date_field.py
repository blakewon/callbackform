# Generated by Django 3.2.6 on 2021-08-23 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('test', '0003_callback'),
    ]

    operations = [
        migrations.AlterField(
            model_name='callback',
            name='date_field',
            field=models.DateField(max_length=20),
        ),
    ]
