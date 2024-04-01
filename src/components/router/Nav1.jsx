import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav1({children}) {
  return (
   <div>
     <header>
      <h1>Main Layout</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
   </div>
  )
}
