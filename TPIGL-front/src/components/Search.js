import React from "react";
import "./Search.css"
import {useState } from "react"
import axios from "axios";
const Home = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [period, setPeriod] = useState('');
    const [type, setType] = useState('');
    const handleSubmitFilter = (e) => {
        e.preventDefault();
        const formFilter = {category,city,region,period}
        console.log(formFilter);
        axios.post('http://your-api-endpoint.com/submit-form', formFilter)
          .then(response => {
            console.log(response);
            setCategory('');
            setCity('');
            setRegion('');
            setType('');
            setPeriod('')
          }
          )
          .catch(error => {
            console.error(error);
          });
        }
      const handleSubmit = (e) => {
        console.log(search)
        e.preventDefault();
        axios.post('http://your-api-endpoint.com/submit-form', search)
        .then(response => {
            console.log(response);
            setSearch('')}
        )
        .catch(error => {
            console.error(error);
        })
      } 
    return(
        <>
        <div className="search">
                 <input type="text" className="recherche" placeholder="Vente terrain Saoula" onChange={(e) => setSearch(e.target.value)}/>
                 <button className="rechercher" onClick={handleSubmit}>Rechercher</button>
                 <button className="filtrer" onClick={handleSubmitFilter}>filtrer</button>
              </div>
              <div className="filter">
              <form onSubmit={handleSubmit} className="form">
      <select value={category} className="category" onChange={(e) => setCategory(e.target.value)}>
        <option value="">Catégorie</option>
        <option value="category1">Vente</option>
        <option value="category2">Location</option>
        <option value="category3">Vacance</option>
      </select>
      <select value={city} className="city" onChange={(e) => setCity(e.target.value)}>
        <option value=""> Wilaya</option>
        <option value="city1">City 1</option>
        <option value="city2">City 2</option>
        <option value="city3">City 3</option>
      </select>
      <select value={region} className="region" onChange={(e) => setRegion(e.target.value)}>
        <option value="">Commune</option>
        <option value="region1">Region 1</option>
        <option value="region2">Region 2</option>
        <option value="region3">Region 3</option>
      </select>
      <select value={type} className="type" onChange={(e) => setType(e.target.value)}>
        <option value="">Type</option>
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
        <option value="type3">Type 3</option>
      </select>
      <select value={period} className="period" onChange={(e) => setPeriod(e.target.value)}>
        <option value="">périodes</option>
        <option value="period1">Period 1</option>
        <option value="period2">Period 2</option>
        <option value="period3">Period 3</option>
      </select>
    </form>
              </div>
        </>
    )
}
export default Home;