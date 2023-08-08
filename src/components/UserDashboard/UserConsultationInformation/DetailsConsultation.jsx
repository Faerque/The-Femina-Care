import axios from "axios";
import { useEffect, useState } from "react";
import UserSolutionModal from "./UserSolutionModal";

export default function DetailsConsultation() {
    const [user, setUser] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/v1/get-consultation/')
                if (res.data) {
                    setUser(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    }, [])

    return (
        <div >
            <div className="px-4  sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Here all user consultation has been shown</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 ">Here Consultations details of all users.</p>
            </div>
            <ul role="list" className="divide-y divide-gray-100 p-5">
                {
                    user.map((item, index) => (
                        <li
                            onClick={() => { setShowModal(true), setModalData(item) }}
                            key={index} className="flex justify-between gap-x-6 p-5 hover:bg-base-200 cursor-pointer">
                            <div className="flex gap-x-1">

                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">User name: {item.user_name}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Consultations Name: {item.consultation_name}</p>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{item.consultation_status}</p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">Consultation created date: {new Date(item.consultation_created_time).toLocaleDateString()}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            {showModal && <UserSolutionModal setShowModal={setShowModal} modalData={modalData} />}
        </div>
    )
}
