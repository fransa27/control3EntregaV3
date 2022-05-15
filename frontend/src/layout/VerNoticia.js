//para ver la noticia solita
import { useState, useEffect } from "react"
import axios from "axios"
import Noticia from "../components/Noticia"
import { createStore } from "redux"
import newsReducer from "../reducer/reducer"
import CompleteNew from "../components/CompleteNews"


const store = createStore(newsReducer)


function VerNoticia (id){
    console.log("id" , id)
    console.log("en ver noticia layout")
    const [loaded, setDataLoaded] = useState(false)
    console.log("despues del loaded")
    const [noticia, setNew] = useState([])
    console.log("despues del n")

    const [Estado, cambiarEstado] = useState(true);

    useEffect(()=>{
        const fetchData = async () =>{
            if(!loaded){
                console.log("antes del get")
                const result = await axios.get("http://localhost:4000/news/?${id}")
                console.log("despues del get")

                if(result.data){
                    setDataLoaded(true)
                    setNew(result.data)
                    //console.log(result.data)
                }            
            }
        }
        fetchData()        
    })
      
    return (
        <div className="App">
            <Noticia newList={noticia} ></Noticia>
            {/* <CompleteNew newList={noticia} estado={Estado} cambiarEstado={cambiarEstado}></CompleteNew> */}
        </div>
    )


/*     const [noticia, setNoticia]= useState([])
    const [loaded, setDataLoaded]= useState(false)
    useEffect(()=>{
        const fetchData = async () =>{
            if(!loaded){
                const result = await axios.get('http://localhost:4000/news/${id}')
                console.log(result.data)
                setNoticia(result.data)
                setDataLoaded(true)
            }

            
        }
        fetchData()
    })
 */
/*     axios({method: "get", url:'http://localhost:4000/news/${id}',})
    .then( function (response) {
        console.log(response.data)
    }) */

/*     return (
        <div>
            <CompleteNew newList={noticia} estado={true} cambiarEstado={true}></CompleteNew>
        </div>
    )
     */
    

}

export default VerNoticia