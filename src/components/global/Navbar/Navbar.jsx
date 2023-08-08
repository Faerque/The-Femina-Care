import { useContext, useEffect, useState } from 'react'

import authModal from '../../../context/authContext'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const { setIsLoginModal } = useContext(authModal)
    const [showOption, setShowOption] = useState(false)
    const [user, setUser] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('access') && JSON.parse(localStorage.getItem("userInfo"))) {
            setShowOption(true)
        }
    }, [showOption])
    console.log(user)
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleLogOut = () => {
        localStorage.removeItem('access')
        localStorage.removeItem('userInfo')
        setShowOption(false)
        navigate('/')
    }

    return (
        <div className="navbar  z-10">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">The Femina Care</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {showOption && <ul className='menu menu-horizontal px-1'>
                        <li><Link to='/Services'>Take a Service</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                    </ul>}
                </ul>
                <ul className='menu menu-horizontal px-1'>
                    {
                        showOption ? <li><button onClick={handleLogOut}>Logout</button></li> : <li><button onClick={() => setIsLoginModal(true)} className="">Login</button></li>
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar;