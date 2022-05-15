//para ver la noticia solita
import { useState, useEffect } from "react"
import axios from "axios"

import { createStore } from "redux"
import newsReducer from "../reducer/reducer"

const store = createStore(newsReducer)


function AgregarFavorito (id){

    const [loaded, setDataLoaded] = useState(false)
    const [newFavorite, setNewFavorite] = useState(false)
    useEffect(()=>{
        const fetchData = async () =>{
            if(!loaded){
                const result = await axios.post('http://localhost:4000/favorite/${id}')
                if(result.data){
                    setDataLoaded(true)
                    setNewFavorite(result.data)
                    //console.log(result.data)
                }            
            }
        }
        fetchData()        
    })
      
    return (
        <div className="App">
            <Noticia newList={newFavorite} ></Noticia>
        </div>
    )
    
    

}

export default AgregarFavorito