import { useEffect } from "react";
import { createContext, useState } from "react";

export const ContextApi = createContext({});

export const Provider = ({ children }) => {

    const [fotos, setFotos] = useState([])
    const [fotosFavoritos, setFotosFavoritos] = useState([])
 
    const globalFotos = {fotos, setFotos}
    const globalFotosFavoritos = {fotosFavoritos, setFotosFavoritos}
    console.log(fotosFavoritos)
    console.log(fotos)

    const fotosRender = async() =>{
            const endpoint = "/fotos.json";
            const response = await fetch(endpoint)
            const {photos} = await response.json()
            setFotos(photos)
      }

      useEffect(() =>{
        fotosRender()
      },[])
  
    return <ContextApi.Provider value={{globalFotos, globalFotosFavoritos}}>{children}</ContextApi.Provider>;
};