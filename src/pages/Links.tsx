import React from 'react'
import invitations from '../lib/data.json'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    invitations.map((item, index) => {
      return (
        <Link to={`/invite?name=${item.name}`} key={index}>{item.name}</Link>
      )
    })
  )
}

export default Links