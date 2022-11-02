import React from 'react'
import { Link } from 'react-router-dom';

function NavLink({to, children}) {
    return <Link to={to} role={location.pathname===to ? 'button' : ''}>
        {children}
    </Link>
}

export default function Navbar() {

    return (
        <nav>
            <ul>
                <li><strong>Tu Empleado Perfecto</strong></li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/companies">
                        Empresas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/employees">
                        Empleados
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}