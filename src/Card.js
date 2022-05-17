import React from "react"
export default function Card(props){
    return(
        <section>
        <img src = {props.item.imageUrl} alt = "Not found"/>
        <p className = "country">{props.item.location}</p>
        <a  href = {props.item.googleMapsUrl} className = "google">View on Google Map</a>
        <p className = "location">{props.item.title}</p>
        <p className = "date">{props.item.startDate} - {props.item.endDate}</p>
        <p className = "define">{props.item.description}</p>
        </section>
    )
}