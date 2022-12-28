from django.urls import include, path
from django.views.generic import TemplateView
from annonces.views import *

 
DEFAULT_AUTO_FIELD='django.db.models.BigAutoField'
ACCOUNT_EMAIL_REQUIRED=True
EMAIL_BACKEND='django.core.mail.backends.console.EmailBackend'
SOCIALACCOUNT_QUERY_EMAIL=True 
LOGIN_REDIRECT_URL='home'
ACCOUNT_LOGOUT_REDIRECT_URL='account_login'
ACCOUNT_SESSION_REMEMBER=True

"""from django.contrib import settings 
from django.conf.urls.static import static """



urlpatterns = [
    
    path('home/', index, name='index'),
    path('accounts/', include('allauth.urls')),
    path('annoncer/', annonce_form_view , name='annoncer'),
    #path('details-annonce/', detailsAnnonce, name='details-annonce'),
    path('annonce/<int:pk>',AnnonceDetail, name="AnnonceDetail"),
    path('' , TemplateView.as_view(template_name='dashboard/home.html') , name='home')
    ]