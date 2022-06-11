import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Show(props){
    const {id} = useParams()
    let navigate = useNavigate()

    const [creature, setCreature] = useState([])
    const URL = `https://dk-tamagatchi-backend.herokuapp.com/creatures/${id}`

    const getCreature = async ()=>{
        const response = await fetch(URL)
        const data = await response.json()
        setCreature(data)
    }

    useEffect(() => {getCreature()}, [])

    const deleteCreature = () => {
        props.deleteCreatures(creature._id)
        navigate('/')
    }


    const handleClick = ()=>{
        creature.isFed = creature.isFed !== false
        creature.isWatered = creature.isWatered !== false
        creature.isPetted = creature.isPetted !== false
    }

    return(
        <div key={creature.id} className="creature">
            <h1>{creature.name}</h1>
            <img src={creature.icon} alt={creature.name}/>
            <div className="care">
                {/* Not completely functioning I want to have the boolean change onClick */}
                <button className={`${creature.isFed? 'yes' : 'no'}`} onClick={handleClick}>Food</button>
                <button className={`${creature.isWatered? 'yes' : 'no'}`} type='button'>Water</button>
                <button className={`${creature.isPetted? 'yes' : 'no'}`}>Love</button>
            </div>
            <div className="buttons">
                <Link to={`/creatures/${creature._id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button id="delete" onClick={deleteCreature}>Delete</button>
            </div>
        </div>
    )
}