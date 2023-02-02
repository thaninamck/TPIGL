import React, { useState, useEffect,useCallback ,useRef} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import InscriptionForm from './pages/InscriptionForm';
import MesAnnonces from "./pages/MesAnnonces";
import MonProfil from "./pages/MonProfil";
import DetailsAnnonce from "./pages/DetailsAnnonce";
import DeposerAnnonce from "./pages/DeposerAnnonce";
import DeposerPhotos from './pages/DeposerPhotos';
import MonCompteLayout from './pages/MonCompteLayout';
import LogedNavBar from "./components/LogedNavBar";
import MyFooter from "./components/MyFooter";
import HomeConnected from "./pages/HomeConnected"
import "./App.css";
import "./Form.css";


const App = () => {
  return ( 
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/HomeConnected" element={<HomeConnected />}/>
          <Route path="/InscriptionForm" element={<InscriptionForm />}/>
          <Route path="/MonCompte/" element={<MonCompteLayout />}/> 
          <Route path="MesAnnonces" element={<MesAnnonces />} />
          <Route path="/DeposerAnnonce" element={<DeposerAnnonce />} />
          <Route path="/Annonces/:id" element={<DetailsAnnonce />} />
          <Route path="*" element= {<h1>NotFound</h1>} />
        </Routes>
      </div>
  );
};
export default App;

// {   firstElement
//     ?(
//         <div className="app">
//         {
//             <MaPremiereAnnonce Ai = {firstElement}/>
//             // setAnnonces(annonces.slice(1))
//             annonces?.length > 0
//             ? (
//                 annonces.map((Ai)=>(
//                     <MonAnnonce Ai = {Ai}/>
//                     )
//                 )
//             ):(
//             <> 
//             </>
//             )
//         }
//         </div>
//     ):(
//         <div>
//         <h2>Vous n'avez creer aucune annonce</h2>
//         </div>
//     )
//     }
