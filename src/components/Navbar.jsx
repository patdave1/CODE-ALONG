import React from 'react'
import NavItem from './NavItem'

const links = [
    {
        label: "Home",
        to:"/",
    },
    {
        label: "Products",
        to:"/product-list",
    },
    {
        label: "Task Manager",
        to:"/task-manager",
    },
    {
        label: "About",
        to:"/about",
    },
    {
        label: "Contact",
        to:"/contact",
    },
]

const Navbar = () => {
  return (
    <nav className="flex justify-between max-w-7xl mx-auto shadow-md py-5">
        <h3>PreMest</h3>
        <ul className="flex gap-5">
        {links.map((link,index)=> (<NavItem key={index} to={link.to} label={link.label}/>))}
        </ul>
    </nav>
  )
}

export default Navbar
