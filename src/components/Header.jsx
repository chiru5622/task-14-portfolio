import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="flex justify-between items-center py-6">
      <h1 className="text-2xl font-bold text-primary">Chiru</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <a href="#portfolio" className="hover:text-primary">Portfolio</a>
        <a href="#services" className="hover:text-primary">Services</a>
        <a href="#contact" className="hover:text-primary">Contact</a>
      </nav>
    </header>
  )
}
