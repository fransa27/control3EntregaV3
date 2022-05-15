import { useState, useEffect } from "react"
import axios from "axios"
import VistaFavoritos from "../components/FavouritesList"
import { createStore } from "redux"
import newsReducer from "../reducer/reducer"

const store = createStore(newsReducer)


function FavouriteList (){

    const [loaded, setDataLoaded] = useState(false)
    const [newsFavourites, setNewsFavourites] = useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            if(!loaded){
                const result = await axios.get('http://localhost:4000/favorites')
                if(result.data){
                    setDataLoaded(true)
                    setNewsFavourites(result.data)
                    //console.log(result.data)
                }            
            }
        }
        fetchData()        
    })
      
    return (
        <div className="App">
            <VistaFavoritos newList={newsFavourites} />
        </div>
    )
}

export default FavouriteList