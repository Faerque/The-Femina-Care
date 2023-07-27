// import FeminaCare from '../../../assets/images/Femina_Care_Logo.png'
import { useContext } from 'react'
import FeminaCareLogoWithText from '../../../assets/images/Femina_Care_Logo_with_name.png'
import authModal from '../../../context/authContext'
function Signup() {
    const { isLoginModal, setIsLoginModal, isSignupModal, setIsSignUpModal } = useContext(authModal)

    const handleModal = () => {
        setIsLoginModal(true)
        setIsSignUpModal(false)
    }

    return (
        <div>
            <div className="fixed">

            </div>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="flex w-full p-10 max-w-sm mx-auto border border-lg overflow-hidden rounded-lg shadow-lg lg:max-w-4xl bg-base-100">
                    <div
                        className="bg-cover lg:block lg:w-1/2 bg-opacity-50"
                        style={{ backgroundImage: `url(${FeminaCareLogoWithText})` }}
                    ></div>

                    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 relative z-10">
                        <button onClick={() => setIsSignUpModal(false)} className="absolute top-0 right-0 -mt-4 -mr-4 text-gray-600 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div className="flex items-center justify-center">
                            <p className="text-xl text-center text-gray-600">
                                Make your identity in Femina Care
                            </p>
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="userName">Full Name</label>
                            <input id="userName" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-pink-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-pink-300" type="email" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="LoggingEmailAddress">Email Address</label>
                            <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-pink-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-pink-300" type="email" />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="loggingPassword">Password</label>

                            </div>
                            <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-pink-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-pink-300" type="password" />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/6 border-b border-gray-600 md:w-1/6"></span>

                            <button onClick={handleModal} className="text-xs text-gray-600 uppercase hover:underline">Have an account already?</button>

                            <span className="w-1/6 border-b border-gray-600 md:w-1/6"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup