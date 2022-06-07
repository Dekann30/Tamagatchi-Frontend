import { Navigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Show(props){

    const {id} = useParams()

    const [creature, setCreature] = useState([])
    const URL = `https://dk-tamagatchi-backend.herokuapp.com/creatures/${id}`

    const getCreature = async ()=>{
        const response = await fetch(URL)
        const data = await response.json()
        setCreature(data)
    }

    useEffect(() => {getCreature()}, [])

    const deleteCreature = (creature) => {
        props.deleteCreatures(creature._id)
        Navigate('/')
    }

    return(
        <div key={creature.id} className="creature">
            <div className="buttons">
                <Link to={`/creatures/${creature._id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button id="delete" onClick={deleteCreature}>Delete</button>
            </div>
            <h1>{creature.name}</h1>
            <img src={creature.icon} alt={creature.name}/>
            <h2>Food: {creature.isFed}</h2>
            <h2>Water: {creature.isWatered}</h2>
            <h2>Love: {creature.isPetted}</h2>
        </div>
    )
}