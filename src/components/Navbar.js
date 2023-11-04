import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div className="nav">
            <div className="name">AmukthaMalyada Gaje</div>
            <div className="btns">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </ul>
            </div>
        </div>
    )
}