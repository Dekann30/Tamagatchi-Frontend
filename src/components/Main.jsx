import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'
import Edit from '../pages/Edit'

export default function Main(){
    const [creatures, setCreatures] = useState([]) 

    const URL = 'https://dk-tamagatchi-backend.herokuapp.com/creatures/'

    const getCreatures = async () => {
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
        getCreatures()
    }

    const updateCreatures = async (creature, id)=>{
        await fetch(URL + id, {
            method: 'put',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(creature)
        })
        getCreatures()
    }

    const deleteCreatures = async(id)=>{
        await fetch(URL + id, {
            method: 'delete'
        })
        getCreatures()
    }
   
    useEffect(() => {getCreatures()}, [])

    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Index creatures={creatures} createCreatures={createCreatures}/>}/>
                <Route path='/creatures/:id' element={<Show creatures={creatures} deleteCreatures={deleteCreatures}/>}/>
                <Route path='/creatures/:id/edit' element={<Edit creatures={creatures} updateCreatures={updateCreatures} />}/>
            </Routes>
        </main>
    )
}