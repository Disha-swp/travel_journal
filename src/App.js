import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"
import './style.css'
export default function App(){
   
    
    const items = data.map((item) =>{
        return(
            <Card 
            key = {item.location}
            item = {item} />
        )
    })
    return(
        <div>
            <Navbar />
            {items}
        </div>
    )
}
  