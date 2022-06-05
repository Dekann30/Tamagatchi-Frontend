import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react'

export default function SHow(props){
    const {id} = useParams()
    const creatures = props.creatures
    const creature = creatures.find((c) => c._id === id)
    let navigate = useNavigate()




    return(
        <div className="creature">
            <h1>{creature.name}</h1>
            <img src={creature.icon} alt={creature.name}/>
            <h2>Food: {creature.isFed.toString()}</h2>
            <h2>Water: {creature.isWatered.toString()}</h2>
            <h2>Love: {creature.isPetted.toString()}</h2>
        </div>
    )
}