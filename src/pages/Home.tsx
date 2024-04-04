import React from 'react'
import invitations from '../lib/data.json'
import { NotFound } from '.'

const Home = () => {
    const urlSearch = new URLSearchParams(window.location.search)
    const name = urlSearch.get('name')

    if (!name) return <NotFound />
    
    if (!invitations.some(people => people.name === name)) return (
        <div className="">You has not invited!</div>
    )
    return (
        <div className="">{name}</div>
    )
}

export default Home