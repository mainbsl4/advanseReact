import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav2({children }) {
  return (
    <div>
    <header>
      <h1>Admin Layout</h1>
      <nav>
        <ul>
          <li><Link to="/admin">Admin Dashboard</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
  )
}
