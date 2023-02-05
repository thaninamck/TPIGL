import React from 'react';
import Navbar from '../components/Navbar';
import PopUp from '../components/PopUp';
import "./Home.css"
import  Annonce from '../components/Annonce'
import { useState, useEffect } from 'react';
import axios from "axios"
import Search from '../components/Search';
import MyFooter from '../components/MyFooter';
const Home = () => {
    const [Annonces,setAnnonces] = useState([
        { picture:"", title:"Vente Appartement F5 Saoula", location: "Saoula, Alger", category: "Appartement", surface: "100", date: "12/02/2022", price: "1000000"},
        { picture:"", title:"Echange Appartement F5 Setif", location: "AinArnat, Setif", category: "Appartement", surface: "80", date: "12/02/2023", price: "2000000"},
        { picture:"", title:"Vente Appartement F5 Saoula", location: "Saoula, Alger", category: "Appartement", surface: "100", date: "21/03/2021", price: "800000"},
        { picture:"", title:"Vente Appartement F5 Saoula", location: "Saoula, Alger", category: "Appartement", surface: "100", date: "7/02/2022", price: "3000000"},
        { picture:"", title:"Vente Appartement F5 Saoula", location: "Saoula, Alger", category: "Appartement", surface: "100", date: "2/02/2022", price: "1300000"},
        { picture:"", title:"Vente Appartement F5 Saoula", location: "Saoula, Alger", category: "Appartement", surface: "100", date: "05/02/2022", price: "1000000"},
    ]);
    function DataList() {
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          setIsLoading(true);
          axios.get('https://your-api-endpoint.com/data')
            .then(response => {
              setAnnonces(response.data);
              setIsLoading(false);
            })
            .catch(error => {
              setError(error);
              setIsLoading(false);
            });
        }, []);
      
        if (isLoading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>An error occurred: {error.message}</p>;
        }
    }
    return ( 
        <div className="home">
            <Navbar></Navbar>
            <h1>Trouver L'immobilier<br/> 
            Qui Vous Convient</h1>
            <h5>Une excellente platforme pour vendre,<br /> 
           louer, échanger des immobilières sans<br /> 
           commisions</h5>
           <div className="image">
           </div>
           <div className="image2"></div>
           <div className="search_container">
              <Search />
           </div>
            <PopUp/>
            <h3 className='H3'>
                Annonces
            </h3>
            <h1 className='H1'>
                Nos Recommendations
            </h1>
            <div className="grid-container">
            {Annonces.map(item => (
                 <div className="grid-item" key={item.id}><Annonce picture="" title={item.title}location={item.location} category={item.category} surface={item.surface} date={item.date} price={item.price} /></div>
             ))}
            {/*<div className="grid-item"><Annonce /></div>
            <div className="grid-item"><Annonce /></div>
            <div className="grid-item"><Annonce /></div>
            <div className="grid-item"><Annonce /></div>
            <div className="grid-item"><Annonce /></div>
            <div className="grid-item"><Annonce /></div>*/}
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