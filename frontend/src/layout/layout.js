import { useState, useEffect } from "react"
import axios from "axios"
import NewComplete from "../components/CompleteNews"
import { createStore } from "redux"

function InfoPanel (){

    const [loaded, setDataLoaded] = useState(false)
    const [newsData, setNewsData] = useState([])

    

    useEffect(()=>{
        const fetchData = async () =>{
            if(!loaded){
                const result = await axios.get('http://localhost:4000/news')
                if(result.data){
                    setDataLoaded(true)
                    setNewsData(result.data)
                }
            }
        }
        fetchData()
        
    })

    
    axios.get('http://localhost:4000/news')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    
    
    
    //return (<ul> state.persons.map(person => <li>{personalbar.name}</li>)</ul>)
}

export default InfoPanel
