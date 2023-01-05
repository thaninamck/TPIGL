# Generated by Django 4.1.4 on 2023-01-04 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('annonces', '0004_scrupted_annonce_alter_annonce_img'),
    ]

    operations = [
        migrations.RenameField(
            model_name='scrupted_annonce',
            old_name='annctype',
            new_name='adresse',
        ),
        migrations.RenameField(
            model_name='scrupted_annonce',
            old_name='nature',
            new_name='categorie',
        ),
        migrations.RenameField(
            model_name='scrupted_annonce',
            old_name='region',
            new_name='localisation',
        ),
        migrations.AddField(
            model_name='scrupted_annonce',
            name='texte',
            field=models.CharField(max_length=500, null=True),
        ),
    ]