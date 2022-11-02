import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='grid'>
            <Link to="/companies" role="button">
                Empresas
            </Link>
            <Link to="/employees" role="button">
                Empleados
            </Link>
        </div>
    )
}