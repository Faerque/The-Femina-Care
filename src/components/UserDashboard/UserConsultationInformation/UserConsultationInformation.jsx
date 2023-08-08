import Navbar from "../../global/Navbar/Navbar"
import SideBar from "../Sidebar/SideBar"
import DetailsConsultation from "./DetailsConsultation"


function UserConsultationInformation() {
    return (
        <div>
            <div style={{ display: 'flex' }} className="bg-base-100">
                <SideBar />
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '20px' }}>
                    <Navbar />
                    <div style={{ flex: 1, padding: '20px' }} className="border rounded-md">
                        <DetailsConsultation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserConsultationInformation