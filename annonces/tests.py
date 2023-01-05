from django.test import LiveServerTestCase
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
# Create your tests here.
class Command(LiveServerTestCase):

  def testform(self):
    selenium = webdriver.Chrome()
    #Choose your url to visit
    selenium.get('http://127.0.0.1:8000/annoncer/')
    #find the elements you need to submit form
    titre = selenium.find_element(By.ID ,'id_titre')
    localisation = selenium.find_element(By.ID ,'id_localisation')
    prix = selenium.find_element(By.ID ,'id_prix')
    description = selenium.find_element(By.ID ,'id_description')
    categorie=selenium.find_element(By.ID ,'id_categorie')
    submit = selenium.find_element(By.ID ,'submit_button')

    #populate the form with data
    titre.send_keys('appartement a louer')
    localisation.send_keys('tizi ouzou oued fali')
    prix.send_keys('40000 ')
    description.send_keys('appartement bon etat vue magnifique prix negociable')
    categorie.send_keys('allocation')
    

    #submit form
    submit.send_keys(Keys.RETURN)

    #check result; page source looks at entire html document
    assert 'appartement a louer' in selenium.page_source

    
    
   