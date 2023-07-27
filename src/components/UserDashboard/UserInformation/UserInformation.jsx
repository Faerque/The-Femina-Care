
import SideBar from '../Sidebar/SideBar'
import Navbar from '../../global/Navbar/Navbar'
import UserInformationCard from './UserInformationCard'

export default function UserInformation() {
    return (
        <div style={{ display: 'flex' }} className="bg-base-100">
            <SideBar />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '20px' }}>
                <Navbar />
                <div style={{ flex: 1, padding: '20px' }} className="border bg-white rounded-md">
                    <UserInformationCard />
                </div>
            </div>
        </div>
    )
}
