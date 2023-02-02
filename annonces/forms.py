from django import forms 
from annonces.models import *
class AnnonceForm(forms.ModelForm): 
    class Meta:
        model=Annonce
        fields = '__all__'
        #fields = ('titre','localisation','prix' , 'description ','categorie','img ')
        categorie_select = (('vente','Vente'),('echange','Echange'),('location','Location'),('location pour vacances','Location pour vacances'))
        """""
        titre = forms.CharField() 
        localisation = forms.CharField() 
        prix = forms.IntegerField()
        description=forms.CharField(max_length=600)
        
        
        categorie = forms.ChoiceField(choices = (('1','vente'),('2','Echange'),('3','location'),('4','location pour vacances')))
        image =  forms.ImageField()
        #default_img = forms.ImageField() """
        widgets = {
            
            "categorie": forms.Select(choices=categorie_select),
            
        }
        
class UtilisateurForm(forms.ModelForm):
    
    # google_id = models.IntegerField( primary_key=True)
    nom = models.CharField(max_length=50)
    # prenom = models.CharField(max_length=50)
    sim1 = models.CharField(max_length=10  , default=None)
    # sim2 = models.CharField(max_length=10 , default=None)
    localisation=models.CharField(max_length=60)
    
    
    
    
    
    