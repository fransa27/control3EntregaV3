import { useState, useEffect } from "react"
import axios from "axios"
import NewsList from "../components/NewsList"
import { createStore } from "redux"
import newsReducer from "../reducer/reducer"
import Favs from "../reducer/favs"
import { faVanShuttle } from "@fortawesome/free-solid-svg-icons"

const store = createStore(newsReducer)


function VerTodasNoticias (){

    const [loaded, setDataLoaded] = useState(false)
    const [companiesData, setComaniesData]=useState([])

    const addNews_to_favorites = (newsss) => {
        store.dispatch({ type: 'ADD', newsss })
        
        //console.log("store: ",stores)
        //alert(`Noticia agregada a favoritos: ${newsss.title}`)a
    }
    

    const deleteNews_from_favorites = (newsss) => {
        store.dispatch({ type: 'DELETE', newsss })
    }
    const probando_funcion =(newsss)=>{
        Favs(newsss,'ADD')
    }
    

    useEffect(()=>{
        const fetchData = async () =>{
            if(!loaded){
                const result = await axios.get('http://localhost:4000/news')
                if(result.data){
                    setDataLoaded(true)
                    setComaniesData(result.data)
                    //console.log(result.data)
                }
                
                
            }
        }
        fetchData()
        
    })
    
    store.subscribe(() => {
        
        //console.log("STORE EXTERNO: ", store.getState())
        //store.getState()
    })
    //console.log("STORE EXTERNO: ", store.getState())
    //var stores = store.getState()
    //console.log("stores: ",stores)

    
        return (            
            <div className="App">                
                <NewsList onPrueba={probando_funcion} newssss={companiesData} onAdd={addNews_to_favorites} onDelete={deleteNews_from_favorites} lista = {store}  />            
                </div>            
        )

}

export default VerTodasNoticias