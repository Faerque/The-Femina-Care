import { useContext, useState } from 'react'

import authModal from '../../../context/authContext'
import { Link } from 'react-router-dom';




function Navbar() {
    const { setIsLoginModal } = useContext(authModal)

    return (
        <div className="navbar  z-10">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">The Femina Care</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <li><Link to='/Services'>Take a Service</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>

                    <li><button onClick={() => setIsLoginModal(true)}>Login</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;