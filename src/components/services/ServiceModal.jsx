import axios from "axios";
import { useEffect, useState } from "react";

const ServiceModal = ({ isOpen, onClose, selectedDisease, onSubmit }) => {
    const [user, setUser] = useState({});
    const [userSymptoms, setUserSymptoms] = useState('');


    // console.log(user.id)
    // console.log(selectedDisease.name)
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    console.log(userSymptoms)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.id && selectedDisease.name && userSymptoms) {
            const config = {
                headers: {
                    'Authorization': `JWT ${localStorage.getItem('access')}`
                }
            };

            const data = {
                userId: user.id,
                user_name: user.name,
                consultation_name: selectedDisease.name,
                consultation_details: userSymptoms
            };
            console.log(data)
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/v1/create-consultation/', data, config);
                console.log(res.data);
                if (res.data) {
                    setUserSymptoms('');
                    onClose();
                }
            } catch (error) {
                console.log(error);
            }
        }
    };



    if (!isOpen) {
        return null;
    }



    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Modal Backdrop */}
            <div className="fixed inset-0 bg-black opacity-50"></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-md p-6 rounded-md shadow-lg">

                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">{selectedDisease.name}</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{selectedDisease.description}</p>
                </div>
                <div className="mt-1 border-t border-gray-100">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Symptoms:</h3>
                    {
                        selectedDisease.symptoms.map((symptom, index) => (
                            <p key={index} className="max-w-2xl text-sm leading-6 text-gray-500">🔍 {symptom}</p>
                        ))
                    }
                </div>
                {/* add a br tag */}
                <div className="bg-gray-200" />
                <div className="mt-1 border-t border-gray-100">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Familiar with these symptoms?</h3>
                    <label className="max-w-2xl text-sm leading-6 text-gray-500">Please write your problem with symptoms your are facing</label>
                    <textarea
                        className="w-full h-24 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-md focus:shadow-outline"
                        placeholder="Write your problem here"
                        value={userSymptoms}
                        onChange={(e) => setUserSymptoms(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <button
                        className="px-4  py-2 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-4 mx-3 py-2 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-40">
                        Submit
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ServiceModal;
