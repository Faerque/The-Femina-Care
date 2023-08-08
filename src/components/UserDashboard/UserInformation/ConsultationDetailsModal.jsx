
function ConsultationDetailsModal({ setShowModal, modalData }) {

    console.log(modalData)

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
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Consultation name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">{modalData.consultation_name}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Consultation Created time </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{new Date(modalData.consultation_created_time).toLocaleString()}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Your Problem</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{modalData.consultation_details}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Consultation Status</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{modalData.consultation_status}</dd>
                        </div>
                        {
                            modalData.consultation_status === 'Answered' ?
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Solution by Specialist</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{modalData.consultation_solution}</dd>
                                </div> : ''
                        }

                    </dl>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        className="px-4 py-2 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-sm hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>


    )
}

export default ConsultationDetailsModal