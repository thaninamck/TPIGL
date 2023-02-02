import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PopUp from '../components/PopUp';
import './InscriptionForm.css';
import '../App.css'
const InscriptionForm = () => {
  const [familyName, setFamilyName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(familyName);
  };

  return (
    <>
    <Navbar />
    <div className="form-group">
      <div className="container_form">
      <p className="form-title">Encore une etape pour  terminer votre inscription</p>
      <p className="form-under-title">Ces  coordonées seront visibles dans vos annonces </p>  
      <form onSubmit={handleSubmit} className="form">
      <table className='TableI'>
        <tbody>
            <tr>
              <td>
                <label htmlFor="familyName">Nom:</label>
              </td>
              <td>
                <input id="familyName" type="text" placeholder="Nom" value={familyName} onChange={(e) => setFamilyName(e.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="firstName">Prénom:</label>
              </td>
              <td>
                <input type="text" id="firstName" value={firstName}  placeholder="Prénom" onChange={(e) => setFirstName(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dateOfBirth">Date de naissance:</label>
              </td>
              <td>
                <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td >
                <label htmlFor="emailAddress">Email:</label>
              </td>
              <td>
                <input type="email" id="emailAddress" placeholder="Email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phoneNumber">Téléphone:</label>
              </td>
              <td>
                <input type="tel" id="phoneNumber" placeholder="XX XX XX XX XX" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Image de profile:</label>
              </td>
              <td>
              <label htmlFor="image" className='labelImage'>Upload Image</label>
                <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])}/>
              </td>
            </tr>
        </tbody>
    </table>       
    <button type="submit" className='Submit'>Enregistrer</button>
      </form>
      </div>
      
    </div>
    <PopUp />
    <footer className='footer'>
        2022 Tout Droits Réservé
    </footer>
    </>
  );
};

export default InscriptionForm;