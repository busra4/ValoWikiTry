import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
const AppLevelContext=React.createContext()
const API ='https://valorant-api.com/v1'


export const AppLevelProvider =({children}) => {
   const [agents,setAgents]=useState([])
   const [maps,setMaps]=useState([])
   const [weapons,setWeapons]=useState([])
   const [spreys,setSpreys]=useState([])




   const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * 
        (max - min + 1)) + min).toString();
};





    const fetchAgents=async()=>{
        const response =await axios.get(`${API}/agents?isPlayableCharacter=true`)
        setAgents(response.data.data)
    }


   
    const fetchWeapons=async()=>{
        const response =await axios.get(`${API}/weapons`)
        setWeapons(response.data.data)
    }

    const fetchMaps=async()=>{
        const response =await axios.get(`${API}/maps`)
        setMaps(response.data.data)
    }
    const fetchSpreys=async()=>{
        const response =await axios.get(`${API}/sprays`)
        setSpreys(response.data.data)
    }


   

return(
    <AppLevelContext.Provider value={{
        agents,
        maps,
        weapons,
        spreys,
        fetchAgents,
        fetchWeapons,
        fetchMaps,
        setMaps,
        setWeapons,
        setAgents,
        setSpreys,
        fetchSpreys
      
       

    }}>
        {children}
        </AppLevelContext.Provider>
)
}

export default AppLevelContext