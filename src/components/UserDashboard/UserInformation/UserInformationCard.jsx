import { useEffect, useState } from "react"
import ConsultationDetailsModal from "./ConsultationDetailsModal";
import axios from "axios";

function UserInformationCard() {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({});
    const [consultations, setConsultations] = useState([]);
    const [DataFilterById, setDataFilterById] = useState([]);
    const [modalData, setModalData] = useState({});

    console.log(user);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    useEffect(() => {
        // Make the API call
        axios.get('http://127.0.0.1:8000/api/v1/get-consultation/')
            .then(response => {
                setConsultations(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        // Filter consultations data by user.id
        const filteredData = consultations.filter(consultation => consultation.userId === user.id);
        setDataFilterById(filteredData);
    }, [consultations, user.id]);

    console.log(DataFilterById)

    const HandleModal = (consultationByUser) => {
        setShowModal(!showModal)
        setModalData(consultationByUser)
    }

    console.log(consultations)
    return (
        <div>
            <div className="p-5 bg-gray-100">
                <div className="px-4  sm:px-0">
                    <h3 className="text-base  font-semibold leading-7 text-gray-900">User Information</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details of The Femina Care.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Date of Birth</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><span className="italic font-sm text-gray-400">[This features is coming soon]</span></dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Your identity</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><span className="italic font-sm text-gray-400">[This features is coming soon]</span></dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">About yourself</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><span className="italic font-sm text-gray-400">[This features is coming soon]</span></dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Consultations Taken by you</dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <table className="w-full divide-y  divide-gray-100  border border-gray-200">
                                    {DataFilterById.length > 0 ? (
                                        DataFilterById.map(consultationByUser => (
                                            <tr
                                                key={consultationByUser.id}
                                                onClick={() => HandleModal(consultationByUser)} // Pass consultation data to HandleModal
                                                className="flex items-center justify-between hover:bg-gray-300 cursor-pointer py-4 pl-4 pr-5 text-sm leading-6"
                                            >
                                                <td className="flex w-0 flex-1 items-center">
                                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                        <span className="truncate font-medium">Name: {consultationByUser.consultation_name}</span>
                                                        <span className="truncate text-gray-400">
                                                            Taken Date: {new Date(consultationByUser.consultation_created_time).toLocaleDateString()}
                                                        </span>
                                                        <span className="truncate text-gray-400">
                                                            Status:
                                                        </span>
                                                        <span className={`text-${consultationByUser.consultation_status === 'Answered' ? 'green' : ''}-800`}>
                                                            {consultationByUser.consultation_status}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="ml-4 flex-shrink-0">
                                                    <button onClick={() => HandleModal(consultationByUser)} className="font-sm hover:text-pink-500">Click to see more</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="2" className="text-center py-4">
                                                No consultation is taken by you yet
                                            </td>
                                        </tr>
                                    )}
                                </table>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            {showModal && <ConsultationDetailsModal setShowModal={setShowModal} modalData={modalData} />}

        </div>
    )
}

export default UserInformationCard