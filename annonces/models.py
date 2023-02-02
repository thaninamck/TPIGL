from django.db import models
from django.views import generic
## modelisation de la BDD version 1.
class Utilisateur(models.Model):
    # google_id = models.IntegerField( primary_key=True)
    email = models.CharField(max_length=80)
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    sim1 = models.CharField(max_length=10 )
    sim2 = models.CharField(max_length=10)
    localisation=models.CharField(max_length=60)
    username = models.CharField(max_length=50, unique=True)
    # def __init__(self , nom , prenom , sim1 , sim2 , local):
    #     self.nom = nom 
    #     self.prenom = prenom
    #     self.sim1 = sim1 
    #     self.sim2 = sim2 
    #     self.localisation = local
    
    


    
class bien(models.Model):
    wilaya = models.CharField(max_length=100)
    commune = models.CharField(max_length=100)
    type = models.CharField(max_length=35) # flat , terrain , bungalow , villa etc.
    description = models.TextField(max_length=200 , null=True)
    localisation=models.CharField(max_length=60)
    prix=models.IntegerField( default=0000000000)
    # un champs called point to store the coordinates of the location after using the google maps api .
    # coordinates = point(x,y)
    
    # def __init__(self , wilaya , commune , Type , description , localisation , prix):
    #     self.wilaya = wilaya
    #     self.commune = commune 
    #     self.type = Type 
    #     self.localisation = localisation
    #     self.prix = prix
    #     self.description = description 
        
        

# Create your models here.
class Annonce(models.Model):
    
    titre = models.CharField(max_length=50)  
    date = models.DateTimeField(  auto_now_add=True , null=True)
    categorie=models.CharField(max_length=60 , null=True)  
    supprimé=models.BooleanField(default=False)
    lebien = models.OneToOneField(
        bien,
        on_delete=models.CASCADE , default= 0)  
    id_annonceur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE , default=0)
    
    
    def __str__(self):
        return self.titre 

    def __init__(self , titre , categorie , bien , id_annonceur):
        self.titre = titre
        self.categorie = categorie
        self.id_annonceur = id_annonceur
        self.bien = bien.id 
        


class ImagesAnnonces(models.Model):
    id_annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)
    img = models.ImageField(upload_to='images_annonces/' ,default='images/default.png')

class ImagesUtilisateurs(models.Model):
    id_utilisateur = models.ForeignKey(Utilisateur , on_delete=models.CASCADE)
    img = models.ImageField(upload_to='images_users/' ,default='images/default.png')
      
      


class Message(models.Model):
    id_expediteur = models.ForeignKey(Utilisateur , on_delete=models.CASCADE , related_name="sender")
    id_receveur = models.ForeignKey(Utilisateur , on_delete=models.CASCADE , related_name="receiver")
    msg = models.TextField(null=True )
    
class Tag(models.Model):
    id_annonceur = models.ForeignKey(Utilisateur , on_delete=models.CASCADE , related_name="utilisateur")
    id_annonce = models.ForeignKey(Annonce , on_delete=models.CASCADE , related_name="annonce")

    