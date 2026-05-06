import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'

function Profile() {
    const name=useContext(UserContext)
    const {username}=useParams()
  return (
    <div>
      <h2>Profile</h2>
      <h1>{username}</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default Profile