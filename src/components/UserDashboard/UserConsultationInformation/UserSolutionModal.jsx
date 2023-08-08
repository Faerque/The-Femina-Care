import axios from "axios";
import { useEffect, useState } from "react"

function UserSolutionModal({ modalData, setShowModal }) {

    const [solution, setSolution] = useState('')

    const [user, setUser] = useState({});
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);



    const handleSubmit = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        }
        const data = {
            "id": modalData.id,
            "consultation_status": 'Answered',
            "consultation_solution": solution,
            "consultation_solution_given_by": user.name
        }
        if (solution) {
            try {
                const res = await axios.put('http://127.0.0.1:8000/api/v1/update-consultation/', data, config)
                if (res.data) {
                    setShowModal(false)
                }

            } catch (error) {
                console.log(error)
            }
        }
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Modal Backdrop */}
            <div className="fixed inset-0 bg-black opacity-50"></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-md p-6 rounded-sm shadow-lg">

                <div className="px-4  sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Consultation Information</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Your consultation details are appeared.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Consultation name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">{modalData.consultation_name}</dd>
                        </div>
                        <div className="px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">User name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">{modalData.user_name}</dd>
                        </div>
                        <div className="px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Consultation Created time </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{new Date(modalData.consultation_created_time).toLocaleString()}</dd>
                        </div>
                        <div className="px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">User Problem</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{modalData.consultation_details}</dd>
                        </div>
                        <div className="px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Consultation Status</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{modalData.consultation_status}</dd>
                        </div>


                    </dl>
                    <div className="mt-1 border-t border-gray-100">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Give a proper solution to user</h3>
                        <label className="max-w-2xl text-sm leading-6 text-gray-500">Please write carefully when you are giving a solution user </label>
                        <textarea
                            className="w-full h-24 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-md focus:shadow-outline"
                            placeholder="Write your solution here"
                            value={solution}
                            onChange={(e) => setSolution(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        className="px-4 py-2 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-sm hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-4 mx-3 py-2 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-sm hover:bg-green-500 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-40">
                        Submit the solution
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserSolutionModal