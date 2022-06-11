import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Index(props){

    const [newForm, setNewForm] = useState({
        name: '',
        icon: '',
    })

    const handleChange = (event) =>{
        setNewForm((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        props.createCreatures(newForm)
        setNewForm({
            name: '',
            icon: '',
        })
    }

    const loaded = () => {

        return props.creatures.map((creature)=>(
            <div key={creature._id}>
                <Link to={`/creatures/${creature._id}`}>
                    <h1>{creature.name}</h1>
                </Link>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <h1>Creature Care</h1>
            <img src="https://img.freepik.com/free-vector/collection-farm-animals-cartoon_29190-5072.jpg?w=1060" alt="farm animals"></img>
            {props.creatures ? loaded() : loading()}
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={newForm.name}
                    name='name'
                    placeholder='Name'
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    value={newForm.icon}
                    name='icon'
                    placeholder='Icon Url'
                    onChange={handleChange}
                />
                <input type='submit' value='Create Creature'/>
            </form>
        </section>
        
    )
}