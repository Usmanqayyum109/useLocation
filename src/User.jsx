import React from 'react'
import { useParams, useLocation } from 'react-router-dom'


export default function User() {
    const {firstName} = useParams();
    const location = useLocation();
  return (
    <div>
      <h1>This is User {firstName} Page</h1>
      <h3>My current Location is {location.pathname}</h3>
      {location.pathname === `User/Usman` ? 
    (<button>   Got it</button> ) : null}
    </div>
  )
}
