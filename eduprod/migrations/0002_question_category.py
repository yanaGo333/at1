# Generated by Django 5.0.2 on 2024-03-20 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eduprod', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='category',
            field=models.CharField(default='General', max_length=50),
        ),
    ]
