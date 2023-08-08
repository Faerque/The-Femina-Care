import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


function SideBar() {
    const [user, setUser] = useState({});
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content mt-20">
                        <li><Link to='/dashboard'>Main Dashboard</Link></li>
                        <li><Link to='/dashboard/userInformation'>User Information</Link></li>
                        {user.is_Admin && <li><Link to='/dashboard/userConsultation'>User Consultations</Link></li>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar