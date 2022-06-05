import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Show({creatures}){
    const {id} = useParams()
    // const creatures = props.creatures
    const creature = creatures.find(creature => creature._id === id)
    console.log(id)
    console.log(creatures)
    console.log(creature)

    return(
        <div key={creature.id} className="creature">
            <Link to={`/creatures/${creature.id}/edit`}>
                <button>Edit</button>
            </Link>
            <h1>{creature.name}</h1>
            <img src={creature.icon} alt={creature.name}/>
            <h2>Food: {creature.isFed.toString()}</h2>
            <h2>Water: {creature.isWatered.toString()}</h2>
            <h2>Love: {creature.isPetted.toString()}</h2>
        </div>
    )
}