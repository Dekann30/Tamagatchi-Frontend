import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

export default function Main(){
    const [creatures, setCreatures] = useState([]) 

    const URL = 'https://dk-tamagatchi-backend.herokuapp.com/creatures'

    const getCreature = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setCreatures(data)
    }

    const createCreatures = async(creature)=>{
        await fetch (URL, {
            method: 'post',
            headers: {
                'Content-Type': "Application/json"
            },
            body: JSON.stringify(creature)
        })
        getCreature()
    }

    const updateCreature = async (creature, id)=>{
        await fetch(URL + id, {
            method: 'put',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(creature)
        })
        getCreature()
    }
   
    useEffect(() => {getCreature()}, [])

    return (
        <main>
            <Routes>
                <Route path='/' element={<Index creatures={creatures} createCreatures={createCreatures}/>}/>
                <Route path='/creatures/:id' element={<Show creatures={creatures}/>}/>
            </Routes>
        </main>
    )
}