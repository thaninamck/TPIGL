# Generated by Django 4.1.4 on 2023-02-02 21:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('annonces', '0005_remove_utilisateur_google_id_utilisateur_email_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_annonce', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='annonce', to='annonces.annonce')),
                ('id_annonceur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='utilisateur', to='annonces.utilisateur')),
            ],
        ),
    ]
