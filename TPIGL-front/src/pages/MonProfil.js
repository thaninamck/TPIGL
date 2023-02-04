import React, { useState, useEffect,useCallback ,useRef} from "react";
import { useParams } from "react-router-dom";

import "../App.css";
import editIcon from "../images/icons8-modify-58 (1) 1.svg";
import line from "../images/Line13.svg";
import line2 from "../images/Line14.svg";
import mouh from "../images/mouh.png";

function InformationProfil() {
    return(<div className="my-info">
                    <div className="entete-info">
                        <div className="profile">Profile</div>
                        <div className="edit">
                            <img src={editIcon} alt="An icon"/>
                            <div>Modifier</div>
                        </div>
                    </div>
                    <div className="table-info">
                        <div className="une-ligne">
                        <div className="une-info">
                            <div className="nom-du-champ">Nom</div>
                            <div className="champ">Kedadsa</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        <div className="une-info">
                            <div className="nom-du-champ">Adresse email</div>
                            <div className="champ">gmail@gmail.com</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        </div>
                        <div className="une-ligne">
                        <div className="une-info">
                            <div className="nom-du-champ">prenom</div>
                            <div className="champ">Islam</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        <div className="une-info">
                            <div className="nom-du-champ">Adresse</div>
                            <div className="champ">Saoula</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        </div>
                        <div className="une-ligne">
                        <div className="une-info">
                            <div className="nom-du-champ">Numero 1</div>
                            <div className="champ">056546544</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        <div className="une-photo">
                            <div className="nom-du-champ-photo">Image de profil</div>
                            <div className="champ-photo"><p>Telecharger Photo</p></div>
                        </div>
                        </div>
                        <div className="une-ligne">
                        <div className="une-info">
                            <div className="nom-du-champ">Numero 2</div>
                            <div className="champ">056546544</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        </div>
                    </div>
            </div>
    )
}
function MessageProfil() {
    return(
        <div className="my-messages">
        <div className="entete-messages">
            <div className="profile">Messages</div>
        </div>
        <div className="les-messages">
        <div className="une-ligne-message">
                <div className="un-message">
                    <div className="img-info-message">
                        <img className="profile-image" src={mouh} alt="Profil"/>
                        <div className="nom-date-message">
                        <div className="nom-date">
                            <div className="nom">Kedadsa Islam </div>
                            <div className="date-message">01/01/2023</div>
                        </div>
                    <   div className="le-message">Je suis interessé par votre annonce</div>
                        </div>
                    </div>
                    <img className="line" src={line2} alt="A line"/>
                </div>
        </div>
        <div className="une-ligne-message">
                <div className="un-message">
                    <div className="img-info-message">
                        <img className="profile-image" src={mouh} alt="Profil"/>
                        <div className="nom-date-message">
                        <div className="nom-date">
                            <div className="nom">Kedadsa Islam </div>
                            <div className="date-message">01/01/2023</div>
                        </div>
                    <   div className="le-message">Je suis interessé par votre annonce</div>
                        </div>
                    </div>
                    <img className="line" src={line2} alt="A line"/>
                </div>
        </div>
        <div className="une-ligne-message">
                <div className="un-message">
                    <div className="img-info-message">
                        <img className="profile-image" src={mouh} alt="Profil"/>
                        <div className="nom-date-message">
                        <div className="nom-date">
                            <div className="nom">Kedadsa Islam </div>
                            <div className="date-message">01/01/2023</div>
                        </div>
                    <   div className="le-message">Je suis interessé par votre annonce</div>
                        </div>
                    </div>
                    <img className="line" src={line2} alt="A line"/>
                </div>
        </div>
        <div className="une-ligne-message">
                <div className="un-message">
                    <div className="img-info-message">
                        <img className="profile-image" src={mouh} alt="Profil"/>
                        <div className="nom-date-message">
                        <div className="nom-date">
                            <div className="nom">Kedadsa Islam </div>
                            <div className="date-message">01/01/2023</div>
                        </div>
                    <   div className="le-message">Je suis interessé par votre annonce</div>
                        </div>
                    </div>
                    <img className="line" src={line2} alt="A line"/>
                </div>
        </div>
        <div className="une-ligne-message">
                <div className="un-message">
                    <div className="img-info-message">
                        <img className="profile-image" src={mouh} alt="Profil"/>
                        <div className="nom-date-message">
                        <div className="nom-date">
                            <div className="nom">Kedadsa Islam </div>
                            <div className="date-message">01/01/2023</div>
                        </div>
                    <   div className="le-message">Je suis interessé par votre annonce</div>
                        </div>
                    </div>
                    <img className="line" src={line2} alt="A line"/>
                </div>
        </div>
        </div>
    </div>
    )
}

function Titre({titre}) {
    return (
        <div className="Titre-Text">
            <p className="Titre">{titre}</p>
        </div>
    )
}

function Image(){
    return(
        <div className="image-profil-container">
            <div className="image-profil-subcontainer">

            <div className="image-profil-container-cadre">
                <img  src={mouh} alt=""/>
            </div>
            <div className="image-profil-container-name">
                Kedadsa Islam Chakib
            </div>

            </div>
        </div>
    )
}
function MesAnnoncesContainer(props) {
    return(
    <>
    <div className="c-page">
        <Titre titre = {props.titre} />
        <Image />
        <div className="p-content">
            <InformationProfil />
            <MessageProfil />
        </div>
    </div>
    </>
    )
}

const MonProfil = ()=>{
     const titre = "Mon Profil"
    return(
    <>
    <MesAnnoncesContainer titre={titre}/>
    </>
    )
}

export default MonProfil;