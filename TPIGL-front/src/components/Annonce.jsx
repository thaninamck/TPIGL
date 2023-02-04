import React from 'react';
import "./Annonce.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import {AiOutlineHome} from "react-icons/ai"
import {RxDimensions} from "react-icons/rx"
import {BsCalendarDate} from "react-icons/bs"
import {MdAttachMoney} from "react-icons/md"
const InformationCard = ({ picture, title, location, type, surface, date, price }) => (
  
  <div className='Annonce'>
    <img src="E:\React_tutorials\TPIGL-front\src\images\beautiful-red-brick-house-with-decorative-lights.png" alt="Not found"/>
    <div className="container-info">
        <div className="container-title">
            <h2>Vente appartement F5 Saoula</h2>
            <button><IoIosHeartEmpty/></button>
        </div>
        <div className="localisation"><GoLocation/>Saoula, Alger</div>
        <div className="surface"><RxDimensions/>100 m2</div>
        <div className="typ"><AiOutlineHome/>Appartement</div>
        <div className="date"><BsCalendarDate/>12/02/2023</div>
        <div className="container-prix">
            <div className="prix"><MdAttachMoney/>1000000 DA</div>
            <button>A vendre</button>
        </div>
    </div>
  </div>
);

export default InformationCard;