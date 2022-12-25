from django.urls import include, path
from django.views.generic import TemplateView
from . import views

DEFAULT_AUTO_FIELD='django.db.models.BigAutoField'
ACCOUNT_EMAIL_REQUIRED=True
EMAIL_BACKEND='django.core.mail.backends.console.EmailBackend'
SOCIALACCOUNT_QUERY_EMAIL=True 
LOGIN_REDIRECT_URL='home'
ACCOUNT_LOGOUT_REDIRECT_URL='account_login'
ACCOUNT_SESSION_REMEMBER=True

urlpatterns = [
    path('home/', views.index, name='index'),
    path('accounts/', include('allauth.urls')),
    path('' , TemplateView.as_view(template_name='dashboard/home.html') , name='home')
    ]