import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LinkLayout = () => {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/main'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/facts'}>Facts</Link>

        <Outlet />
    </div>
  )
}

export default LinkLayout