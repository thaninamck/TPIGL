from django.shortcuts import render,get_list_or_404
from .models  import ImagesAnnonces , ImagesUtilisateurs
from django.http import request , JsonResponse , response
from django.views.decorators.csrf import csrf_exempt
import json
from .forms import UtilisateurForm
from .serializers import userser 

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



CURRENT_USER = 0
CURRENT_USER_OBJ = 0

## function to add une annonce. axios.post(sumbitform normally)
def annonce_form_view(request):
    
    if request.method == 'POST':
            form = AnnonceForm(request.POST)
            if form.is_valid():
                form.save()
                return JsonResponse({'success':"True"})
            else:
             form = JsonResponse({'success':"False"})
            
 
    return JsonResponse({"success": "True"})

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


# /*****************************ILYES**********************************************/
def verifier_utilisateur(request , email):
    
    CURRENT_USER_OBJ = Utilisateur.objects.get(email = email)
    
    if request.method == "GET" : 
        if CURRENT_USER_OBJ:
            return JsonResponse({ "exist" : "True"})
        else:
            return JsonResponse({ "exist" : "False"})
            
    # after that , after the user_click on consent , and the function called onGoogleSuccess()
    # { axios.get(url/token.userobj.googleid).then(res)=> if res.body.exist == True ;; render pageAnnonces
    # sinon : render pageFormNewUser ; }   

#-------------------------------------------------------------------------------

    
# if new user : axios.res.False : render page : formUser , onsumbit:sendAndVerify:
  # sendAndVerify(){ FormData = newFormData ; formData.append(files , jsonify(inputFiles) ; formData.append(data: inputdata)+ send_Google_ID 
  # axios.put (url/new_user ).then(res)=> etc}

def verifier_et_ajouter_utilisateur(request):
    # to verify the data :
    #what to send : formdata with three fields : json , image , google_id : json{contains all fields , meme si there is null values.}
    exp = request.POST.get('userdata')
    # google_id = request.POST.get("google_id")
    jsondata = json.loads(exp)
    validation = userser(data = jsondata)
    if validation.is_valid():
        # CURRENT_USER = google_id
        uti = Utilisateur(CURRENT_USER , nom = exp["nom"] , prenom = exp["prenom"] , sim1 = exp["sim1"] , sim2=exp["sim2"] , username=exp["username"])          
        uti.save()
        CURRENT_USER_OBJ = Utilisateur.objects.get(email = CURRENT_USER)
        image = ImagesUtilisateurs(img = request.FILES["image"] , id_utilisateur= uti )
        image.save()
        return JsonResponse({"res": "success"})
    else : 
        return JsonResponse({"name": f"{validation.error_messages}"}) 

#-----------------------------------------------------------------------------------


#fonction d'ajout des annonces : 
#page 1 , collect le form , valide le form , ensuite si correct , render componenet , des pages
# send a json file or simple form ?
#--------------------------------------------------------------------------------
def verifier_annonce(request):
    exp = request.POST
    # annonce = Annonce(CURRENT_USER , nom = exp["nom"] , prenom = exp["prenom"] , sim1 = exp["sim1"] , sim2=exp["sim2"] , username=exp["username"])          
    # to be treated later hadiya . 
    
    
# axios.post(message) : after that we fetch the id of the sender and annonce owner and send them in the request.
def envoyer_offre(request):
    msg = request.POST
    id = msg["id"]
    offre = Message(id_expedit=msg["id_exp"] , id_rec=msg["id_rec"] , msg=msg["texte"])
    offre.save()
    
def filtrer_annonces(request):
    target = []
    for filtre in request.POST:
        target.append(Annonce.objects.filter(filter = filtre[filtre]) )
        # return that to front .
    

def recuperer_favoris(request):
    id = request.POST
    tags = Tag.objects.get(id_annonceur = id)
    annonces = []
    for ann in tags : 
        annonces.append(Annonce.objects.get(id = ann.id_annonce))
        
    #return this ...
    
def supprimer_annonce(request):
    id = request.POST
    obj = Annonce.objects.get(id= id)
    obj.delete()
    # return TRUE
    
    
def consulter_msg(request):
    msg = Message.objects.get(id_recepteur = CURRENT_USER).all()
    # return this to islam 
    
    
def recuperer_mes_annonces(request):
    id = request.POST
    annonces = Annonce.objects.get(id = CURRENT_USER)
    images = []
    temp  = []
    for ann in annonces : 
        temp.append(ann.id)
        temp = [x for x in ImagesAnnonces.objects.get(id_annonce = ann.id)]
        images.append({f"{ann.id} : {temp}"})
        # temp = ["/images/image1.png" , "images2.jpg" , "img4.jpeg"]
    
    # after that return them both the images and the annonces 
    # same for all others that of recupere tous les annonces .




@csrf_exempt
def test(request):
    if(request.method == "POST"):
        # print(request.GET)
        # print(request.body)
        # exp = request.POST.get('userdata')
        # # print(exp)
        # aDict = json.loads(exp)
        # # print(f"this is aDict types : {type(aDict)}")
        # # print("thsi is type of exp , after userdata.get")
        # # print(type(exp))# this is a dictionary 
        # # exp = json.dumps(exp)
        # # print("The json_object is as below:", exp)
        # # print(f'type of jsssoni is {type(jsson)} ')
        # # # print(request.POST.getlist('file'))
        # # print(type({"nom" : "ilyes" , "sim": "ahaha"}))
        # # print(f"this is the type of exp {0}")
        # validation = userser(data = aDict)
        # # print(validation)
        # if validation.is_valid():
        #     print("success")
        # else:
        #     print("not valid")
        # print(f"the type of my shit is {type(exp)} ")
        # print(exp)
        # print(f"the type of the eques.post is : {type(request.POST)}")
        
        
        
        # form = UtilisateurForm(request.POST)
        # if form.is_valid():
        #     return JsonResponse({"yess" : "yess"})
        # image = ImagesUtilisateurs()
        # # print(request.POST.get("userdata"))
        # print(f"type of req.body is { type(request.body)}") # the type of reques.boyd is bytes : okk
        # userdaata = request.POST.get("userdata")
        # # image = request.FILES
        # # print(image)
        
        # me = Utilisateur(google_id = 106, nom = "test" )
        # me.save()
        
        # # # # print(len(image))
        # # # print(f"this is weher the for loop begna ")
        # for file in request.FILES :
        #     image = ImagesUtilisateurs(img = request.FILES[file] , id_utilisateur= me )
        #     image.save()
            
        # for obj in ImagesUtilisateurs.objects.all() :
        #     obj.delete()
        #     print(file)
        #     print(f"type of file is {type(file)}")
        #     name = request.FILES[file]
        #     print(name)
            
        # print(type(userdaata))
        # data = json.loads(userdaata)
        # for i in data :
        #     print(f" {i} : {data[i]}")
        
        # username = login_data.get("username")
        # password = login_data.get("password")
        # user_type = login_data.get("user_type")
        # print(user_type, username, password)
        return HttpResponse("This is a post request")
    else:
        images = ImagesUtilisateurs.objects.all()
        for i in images:
            print(i.id_utilisateur)
            print(i.img)
        return JsonResponse({"succes": "True"})
    
    
    
 
    