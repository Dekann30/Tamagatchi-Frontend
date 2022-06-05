import { useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

export default function Edit(props){
    const {id} = useParams()
    const creatures = props.creatures
    const creature = creatures.find((c) => c._id === id)
    let navigate = useNavigate()

    console.log(creature)

    const [editForm, setEditForm] = useState(creature)

    const handleChange = (event) =>{
        setEditForm((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateCreatures(editForm, id)
        navigate(`/creatures/${creature.id}`)
    }


    return(
        <div className='editform'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={editForm.name}
                    name='name'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={editForm.icon}
                    name='icon'
                    onChange={handleChange}
                />
                <input type='submit' value='Update Creature'/>
            </form>
        </div>
    )
}