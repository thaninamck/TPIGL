import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css'

const MenuBar =()=>{
    return(
    <div className="MenuBar">
        <div className="options">
            <Link to="/MonCompte">
                <button className="profilButton" onClick={()=>{}}>MON PROFIL</button>
            </Link>
            <Link to="/MonCompte/MesAnnonces">
                <button className="annoncesButton" onClick={()=>{}}>ANNONCES</button>
            </Link>
            <button className="favorisButton" onClick={()=>{}}>FAVORIS</button>
        </div>
    </div>
    )
}

export default MenuBar 
