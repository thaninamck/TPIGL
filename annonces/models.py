from django.db import models
from django.views import generic

# Create your models here.
class Annonce(models.Model):
    
    titre = models.CharField(max_length=50)
    
    date = models.DateTimeField(  auto_now_add=True , null=True)
    localisation=models.CharField(max_length=60)
    prix=models.IntegerField( default=0000000000)
    description = models.TextField(max_length=200 , null=True)
    categorie=models.CharField(max_length=60 , null=True)
    img = models.ImageField(upload_to='images/' ,default='images/default.png')
    supprimé=models.BooleanField(default=False)

    def __str__(self):
        return self.titre 

     
class scrupted_annonce(models.Model):
    categorie = models.CharField(max_length=50, null=True)
    localisation= models.CharField(max_length=50, null=True)
    adresse= models.CharField(max_length=50, null=True)
    surface=models.CharField(max_length=50, null=True)
    prix= models.CharField(max_length=50, null=True)
    texte= models.CharField(max_length=500 , null=True)
         

