from django.shortcuts import render,get_list_or_404

# Create your views here.
def index(request):
    
    context={}
    

    return render(request , 'index.html' , context=context)


from django.shortcuts import render
from django.http import  HttpResponse
from annonces.forms import AnnonceForm



from django.shortcuts import render
from .forms import AnnonceForm
from annonces.models import *


def annonce_form_view(request):
    """Process images uploaded by users"""
    form = AnnonceForm(request.POST,request.FILES)
    
    if request.method == 'POST':
            form = AnnonceForm(request.POST,request.FILES)
            if form.is_valid():
                form.save()
                return HttpResponse('Your Job Application is successfully submitted')
            else:
             form = AnnonceForm()
            
    context = {
                    'form':form,
                }
    return render(request, 'annonces.html', context)

#vue pour recuperer les annonces
def recupererAnnonces(request):
    nb_resultat=Annonce.objects.filter(supprimé__exact='False').all().count()
    Annonces_list =Annonce.objects.filter(supprimé__exact='False').all()
    context={'annonces_list' : Annonces_list,
             'nb_resultat' : nb_resultat}
    return render(request, 'acceuil.html', context)

#vue pour les details de l'annonce
def AnnonceDetail(request , pk):
    obj=get_list_or_404(Annonce , pk=pk)
    return render(request, 'annonce_detail.html', {'obj':obj})