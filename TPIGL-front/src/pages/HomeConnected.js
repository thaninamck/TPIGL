import React from 'react';
import LogedNavBar from '../components/LogedNavBar';
import PopUp from '../components/PopUp';
import "./Home.css"
import  Annonce from '../components/Annonce'
import Filter from '../components/Filter';
import { useState } from 'react';
import MyFooter from '../components/MyFooter';
const Home = () => {
    const [Annonces,setAnnonces] = useState([
        {id: 1,picture: null,title: "Vente appartement Saoula",Location: "Saoula, Alger",Type:"Appartement", Surface: 100,Date: "10/12/2022", price: 2000000},
        {id: 2, picture: null, title: "Vente appartement Setif",Location: "Setif, Setif",Type: "Appartement",Surface: 200,Date: "2/2/2023", price: 1500000},
        {id: 3, picture: null, title: "Location appartement jijel",Location: "Aouana, Jijel", Type: "Appartement", Surface: 75, Date: "3/1/2023",price: 1000000}
    ]);
    return ( 
        <div className="home">
            <LogedNavBar/>
            <h1>Trouver L'immobilier<br/> 
            Qui Vous Convient</h1>
            <h5>Une excellente platforme pour vendre,<br /> 
           louer, échanger des immobilières sans<br /> 
           commisions</h5>
           <div className="image">
           </div>
           <div className="image2"></div>
           <div className="search_container">
              <div className="search">
                 <input type="text" className="recherche" placeholder="Vente terrain Saoula"/>
                 <button className="rechercher">Rechercher</button>
                 <button className="filtrer">filtrer</button>
              </div>
              <div className="filter">
              <Filter/>
              </div>
           </div>
            <h3 className='H3'>
                Annonces
            </h3>
            <h1 className='H1'>
                Nos Recommendations
            </h1>
            <div className="grid-container">
            <div className="grid-item"><Annonce /></div>
            <div className="grid-item"><Annonce /></div>
            <div className="grid-item"><Annonce /></div>
            <div className="grid-item"><Annonce /></div>
            <div className="grid-item"><Annonce /></div>
            <div className="grid-item"><Annonce /></div>
            </div>
            <div className="container-pourquoi">
                <div className="img"></div>
                <div className="reasons">
                    <div className='reason1'></div>
                    <div className='reason2'></div>
                    <div className='reason3'></div>
                </div>
            </div>
            <div className="foter">
                <MyFooter/>
            </div>
        </div>
     );
}
 
export default Home;