/**
 * action:
 * {
 *  'type': 'ADD',
 *  'movie': {...}
 * }
 * @param {*} previousState 
 * @param {*} action 
 */
 import axios from "axios"
 import { useState, useEffect } from "react"
 function newsReducer (previousState = [], action) {
    //const id_1=action.newsss._id
    //onsole.log("id, reducer: ",${action.newsss.title})
    var loaded = false
    const Data=[]

    
    //console.log("error 1")
    //const result = axios.post("http://localhost:4000/favorites/${action.newsss._id}")
    //console.log("result 1 afuera: ",result.data)
    //console.log("error 2")
    //const result_2 = axios.get("http://localhost:4000/favorites")
    //console.log("result 2 afuera: ",result_2.data)
    //if(result_2.data){
        //console.log("tamos dentro")
       // loaded=true
        //Data= result_2.data
     //   console.log("result 2 adentro",result_2.data)
   // }
        
        
    
        
        
        
    
    
    switch (action.type) {
        case 'ADD':
            if (previousState.includes(action.newsss)){
                alert(`¡ Ya está en FAVORITOS !: ${action.newsss.title}`)
                return previousState
            }
            else{
                alert(`NUEVO FAVORITO AGREGADO: ${action.newsss.title}`)
                axios.post(`http://localhost:4000/favorites/${action.newsss._id}`)
                //const result_2 = axios.get("http://localhost:4000/favorites")
                

               
                //console.log("result 2 hola: ",result_2.data)
                return [action.newsss ,  ...previousState ]
            }
            //aaaa
        case 'DELETE':
            if (previousState.includes(action.newsss)){
                alert(`¡ Eliminado de FAVORITOS !: ${action.newsss.title}`)
                
                const indice = previousState.indexOf(action.newsss)
                previousState.splice(indice,1)
                /* axios.post(`http://localhost:4000/favorites/${action.newsss._id}`)
                const result_2 = axios.get("http://localhost:4000/favorites")
                console.log("result 2 chao: ",result_2.data) */
                return previousState
            }
            else{
                alert(`Elemento no pertenece a lista de FAVORITOS: ${action.newsss.title}`)
                return previousState
            }
        default:
            return previousState
    }
}



export default newsReducer