import React, { useState, useEffect,useCallback ,useRef} from "react";
import { useParams } from "react-router-dom";

import "../App.css";
import descriptionIcon from "../images/Description-Icon.svg";
import emailIcon from "../images/Email.svg";
import locationIcon from "../images/location.svg";
import phoneIcon from "../images/phone.svg";
import messageIcon from "../images/message.svg";
import contactIcon from "../images/contact.svg";
import leftarrow from "../images/leftarrow.svg";
import rightarrow from "../images/rightarrow.svg";

const DetailsAnnonce = () => {
    const [message, setMessage] = useState("");
    const {id} = useParams()

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${message}`)
      }

    return(
        <>
        {/** Nav bar place*/}
        <div className="details-annonce">
            <div className="details-annonce-titre-prix">
                <div className="details-annonce-titre">APPARTEMENT A VENDRE</div>
                <div className="details-annonce-prix">1000000 da</div>
            </div>
            <div className="details-annonce-photos-map">
                <div className="details-annonce-photos">
                    <div className="button-left-right">
                        <div className="button-left">
                        <button ><img src={rightarrow} alt="left arrow"/></button>
                        </div>
                        <div className="button-right">
                        <button ><img src={leftarrow} alt="right"/></button>
                        </div>
                    </div>
                </div>
                <div className="details-annonce-map"></div>
            </div>
            <div className="details-annonce-description-titre-tableau-textarea">
                <div className="details-annonce-description-titre">
                    <img src={descriptionIcon} alt="img"/>
                    <div>Description de l'annonce</div>
                </div>
                <div className="details-annonce-description-tableau">
                    <table>
                        <tr>
                            <td>Date</td>
                            <td>12/12/2022  14:30:07</td>
                        </tr>
                        <tr>
                            <td>Categorie</td>
                            <td>Echange</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>Terrain</td>
                        </tr>
                        <tr>
                            <td>Surface</td>
                            <td>100m2</td>
                        </tr>
                        <tr>
                            <td>Wilaya</td>
                            <td>Alger</td>
                        </tr>
                        <tr>
                            <td>Commune</td>
                            <td>Saoula</td>
                        </tr>
                        <tr>
                            <td>Adresse</td>
                            <td>Houch baraka</td>
                        </tr>
                    </table>
                </div>
                <div className="details-annonce-description-textarea">
                    <div className="details-annonce-description-textarea-titre">Description</div>
                    <div className="details-annonce-description-textarea-text">Un appartement F5 avec cuisine equipée</div>
                </div>
            </div>
            <div className="details-annonce-contact">
                <div className="details-annonce-contact-titre">
                    <img src={contactIcon} alt=""contact />
                    <div>
                    Contact et coordonées
                    </div>
                </div>
                <div className="details-annonce-contact-container">
                    <div className="details-annonce-contact-container-ligne">
                        <img src={contactIcon} alt="contact" />
                        <div>Kedadsa Islam Chakib</div>
                    </div>
                    <div className="details-annonce-contact-container-ligne">
                        <img src={locationIcon} alt="location" />
                        <div>Saoula, Alger</div>
                    </div>
                    <div className="details-annonce-contact-container-ligne">
                        <img src={emailIcon} alt="email" />
                        <div>Email@email.com</div>
                    </div>
                    <div className="details-annonce-contact-container-ligne">
                        <img src ={phoneIcon} alt="phone"/>
                        <div>056113411461564</div>
                    </div>
                </div>
            </div>
            <div className="details-annonce-envoyer-message">
                <div className="details-annonce-envoyer-message-titre">
                    <img src={messageIcon} alt="message"/>
                    <div>Envoyer message</div>
                </div>
                <div className="details-annonce-envoyer-message-container">
                    <div className="details-annonce-envoyer-message-container-name-message">
                        <img src="" alt=""/>
                        <div>
                            <div className="details-annonce-envoyer-message-container-message-sender">Ilyes Benabbes</div>
                            <form onSubmit={handleSubmit}>
                                    <textarea
                                    className="message-area"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <input className="envoyer" type="submit" value="Envoyer"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}


export default DetailsAnnonce;