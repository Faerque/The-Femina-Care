import Navbar from "../global/Navbar/Navbar"
import AllUserList from "./AllUserList"
import SideBar from "./Sidebar/SideBar"

function Mainboard() {
    return (
        <div style={{ display: 'flex' }} className="bg-base-100">
            <SideBar />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '20px' }}>
                <Navbar />
                <div style={{ flex: 1, padding: '20px' }} className="border rounded-md">
                    <AllUserList />
                </div>
            </div>
        </div>
    )
}

export default Mainboard