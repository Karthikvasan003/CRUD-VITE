import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav>
        <aside>
            <img src="" alt="logo" />
        </aside>
        <aside>
            <ul>
                <NavLink to={"/"}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={"/viewall"}>
                    <li>ViewAll</li>
                </NavLink>
            </ul>
        </aside>
    </nav>
    </>
  )
}

export default NavBar