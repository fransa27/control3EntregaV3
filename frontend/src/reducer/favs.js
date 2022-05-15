import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

function Favs (dato,senal) {
    
    switch (senal) {
        case 'ADD':
                //alert(`NUEVO FAVORITO AGREGADO: ${dato.newsss.title}`)
                console.log("dato._id: ", dato._id)
                axios.post(`http://localhost:4000/favorites/${dato._id}`)
                const result_2 = axios.get("http://localhost:4000/favorites")
                
                

               
                console.log("result 2 hola:(revisar postman) ",result_2.data)
                
            //aaaa
        
        
    }
}



export default Favs