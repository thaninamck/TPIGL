import React, { useState, useEffect } from "react";
import "./PopUp.css";
import { FaGoogle } from "react-icons/fa";
import { BiMessage} from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import jwt_decode from "jwt-decode"
import axios from "axios" 
export default function Modal() {
  const [modal, setModal] = useState(false);
  function handeCallbackResponse(response){
    // console.log("encoded jwt Id Token: " + response.credential)
    var my_user = jwt_decode(response.credential) ; 
    console.log("now the real use under the mask is : " );
    console.log(my_user);
    axios.get('http://benabbes05ilyes.pythonanywhere.com/annonces/check/' + my_user.email)
          .then(response => { 
            console.log(response) 
            if(response.data.exist === "True"){
              window.location.href = "/HomeConnected";
            }
            else{
              window.location.href = "/InscriptionForm";
            }
            console.log(response);
          }
          )
          .catch(error => {
            console.error(error);
          });
      

  }

  useEffect(() =>{
  /* global google */
  google.accounts.id.initialize({
  client_id : "386512640934-dsrl533naj8mm0ipcofuggc240vc8set.apps.googleusercontent.com" , 
  callback : handeCallbackResponse
  
  }) ; 
  //window.location.href = './InscriptionForm';
  google.accounts.id.renderButton(
    document.getElementById("test"), {
      theme : "outline" , size:"large"
    } 
  ) ;
  },[]);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const handleClick = () => {
    
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
            <button id="test"     ></button>
            <button className="close-modal" onClick={toggleModal}>
              <GrClose className="GrClose"/>
            </button>
          </div>
        </div>
      )}
        </>
  );
}