import React, { useState, useEffect,useCallback ,useRef} from "react";

import DeposerPhotos from "./DeposerPhotos";


const FormPage1 = () => {
  const [inputs, setInputs] = useState({});
  const [description, setDescription] = useState("");
  const [selected, setSelected] = React.useState("");
    
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  
  const algorithm = [
    "Searching Algorithm",
    "Sorting Algorithm",
    "Graph Algorithm",
  ];
  const language = ["C++", "Java", "Python", "C#"];
  const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];
  
  let type = null;
  
  let options = null;
  
  if (selected === "Algorithm") {
    type = algorithm;
  } else if (selected === "Language") {
    type = language;
  } else if (selected === "Data Structure") {
    type = dataStructure;
  }
  
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}
  
  return(
    <>
    <div className="loading">
        <div className="rectangle"></div>
        <div className="circle1">
            <div className="numero1">1</div>
            <div className="circle-text1">Caracteristiques principales</div>
        </div>
        <div className="circle2">
            <div className="numero2">2</div>
            <div className="circle-text2">Photos de mon annonce</div>
        </div>
    </div>
        <div className="large-container">
        <div className="form">
          
                {/* <input 
                type="text"
                name="typeTransaction" 
                value={inputs.typeTransaction || ""} 
                onChange={handleChange}
                />
                <label>Enter your age:
                </label>
            <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
            />
        <input type="submit" /> */}
            <div className="sub-container" >
                <div className="sub-container-entete"><label className="sub-container-entete-label">TYPE DE LA TRANSACTION* : </label><span>VENTE</span></div>
                <div className="button-form-section">
                    <div className="button-form-on-click"><div className="button-form-on-click-text">Vente</div></div> 
                    <div className="button-form"><div className="button-form-text">Location</div></div> 
                    <div className="button-form"><div className="button-form-text">Echange</div></div> 
                    <div className="button-form"><div className="button-form-text">Vacances</div></div> 
                </div>
            </div>
            <div className="sub-container" >
                <div className="sub-container-entete"><label className="sub-container-entete-label">TYPE DU BIEN* : </label></div>
                {/* <img src="" alt="line" /> */}
                <div className="type-du-bien-section">
                <select id="type-du-bien-select" name="type-du-bien">
                    <option value="appartement">Appartement</option>
                    <option value="terrain">Terrain</option>
                </select>
                </div>
            </div>
            <div className="sub-container" >
                <div className="sub-container-entete"><label className="sub-container-entete-label">SURFACE DU BIEN* : </label></div>
                <div className="surface-section"><input type="number" name="surface" value={inputs.surface || ""} onChange={handleChange}/><span>m<sup>2</sup></span></div>
            </div>
            <div className="sub-container" >
                <div className="sub-container-entete"><label className="sub-container-entete-label">PRIX DU BIEN* : </label></div>
                <div className="prix-section"><input type="number" name="prix" value={inputs.prix || ""} onChange={handleChange}/> <span>DA</span> </div>
              </div>
            <div className="sub-container" >
                <div className="sub-container-entete"><label className="sub-container-entete-label">LOCALISATION* : </label></div>
                <div className="location-section">
                  <div className="location-form-1-champ-section">
                      <label>Wilaya</label>
                      <select onChange={changeSelectOptionHandler}>
                      <option>Choose...</option>
                      <option>Algorithm</option>
                      <option>Language</option>
                      <option>Data Structure</option>
                      </select>
                  </div>
                  <div className="location-form-1-champ-section">
                  <label>Commune</label>
                      <select>
                      {
                        /** This is where we have used our options variable */
                          options
                      }
                      </select>
                  </div>
                  <div className="location-form-1-champ-section" >
                  <label>Quartier</label>
                      <input />
                  </div>
                </div>
            </div>
            <div className="sub-container" >
                <div className="sub-container-entete"><label className="sub-container-entete-label">DESCRIPTION* : </label></div>
                <div className="description-section"><textarea className="description-area" value={description} onChange={(e) => setDescription(e.target.value)} /></div>
            </div>
            </div>
    </div>
            </>
  )
}
const DeposerAnnonce = () => {
const [page,setPage] = useState(0);
const [formData, setFormData] = useState({
    typeDeTransaction : "",
    typeDuBien :"",
    surface : 0,
    prix :0,
    description : ""
  })

const PageDisplay = ()=> {
  if (page === 0) {
    return <FormPage1 />
  }else {
    return <DeposerPhotos />
  }
}
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(inputs);
  // }

  return (
    <>
        {PageDisplay()}
        <button className="continuer" 
          disabled = {page == 0}
          onClick={()=>{setPage((currPage)=>currPage-1)}}>
          Retour
        </button>
        <button className="continuer" 
          disabled = {page == 1}
          onClick={()=>{setPage((currPage)=>currPage+1)}}>
            Continuer
        </button>
    </>
  )
}

export default DeposerAnnonce;