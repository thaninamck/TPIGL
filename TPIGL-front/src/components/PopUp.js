import React, { useState } from "react";
import "./PopUp.css";
import { FaGoogle } from "react-icons/fa";
import { BiMessage} from "react-icons/bi";
import { GrClose } from "react-icons/gr";
export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const handleClick = () => {
    window.location.href = './InscriptionForm';
   };
  return (
    <>
      <button onClick={toggleModal} className="Deposer">
        Déposer Une Annonce
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <BiMessage className="BiMessage"/>
            <h2 >Veuiller selectionner l’option suivante pour continuer</h2>
            <p>
            En nous rejoingnant vous pourrrez acceder à l’action precedente
            </p>
            <button className="login-btn" onClick={handleClick}>
               Se Connecter<FaGoogle className="FaGoogle"/>
            </button>
            <button className="close-modal" onClick={toggleModal}>
              <GrClose className="GrClose"/>
            </button>
          </div>
        </div>
      )}
        </>
  );
}