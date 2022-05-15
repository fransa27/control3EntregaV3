import { useState, useEffect } from "react"
import axios from "axios"
import CompleteNew from "../components/CompleteNews"
import App from "..App"

function a (){

    const [loaded, setDataLoaded] = useState(false)
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        
        const fetchData = async () =>{  
            if(!loaded){
                const result = await axios.get('http://localhost:4000/news/:id')  //va a buscar la informacion
                if(result.data){
                    setDataLoaded(true)
                    setNewsData(result.data)
                    
                }
            }
        }
        fetchData()
    })

    return (
        <div className="App">
            <App Newss = {newsData}/>
        </div>
    ) 
    
}

export default a
