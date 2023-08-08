// import FeminaCare from '../../../assets/images/Femina_Care_Logo.png'
import { useContext, useState } from 'react'
import FeminaCareLogoWithText from '../../../assets/images/Femina_Care_Logo_with_name.png'
import authModal from '../../../context/authContext'
import { useNavigate } from 'react-router-dom'
import login from './loginFunction'


function Login() {

    const { isLoginModal, setIsLoginModal, isSignupModal, setIsSignUpModal } = useContext(authModal)
    const [isLoginLoading, setIsLoginLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const handleModal = () => {
        setIsLoginModal(false)
        setIsSignUpModal(true)
    }

    const navigate = useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault()
        setIsLoginLoading(true)
        try {
            const res = await login(email, password)
            if (res) {
                setIsLoginLoading(false);
                navigate('/dashboard');
            }
        } catch (error) {
            setIsLoginLoading(false);
        }
    }


    const passwordForgetMsg = 'if you forget your password.We can do nothing'
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
                        <button onClick={() => setIsLoginModal(false)} className="absolute top-0 right-0 -mt-4 -mr-4 text-gray-600 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div className="flex items-center justify-center">
                            <p className="text-xl text-center text-gray-600">
                                Welcome back to The Femina Care!
                            </p>
                        </div>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="LoggingEmailAddress">Email Address</label>
                                <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-pink-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-pink-300"
                                    placeholder="Enter your email address"
                                    value={email}
                                    name='email'
                                    onChange={e => onChange(e)}
                                    required
                                    type="email" />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="loggingPassword">Password</label>
                                    <a href="#" className="tooltip text-xs text-gray-500 hover:underline" data-tip={passwordForgetMsg}>Forget Password?</a>
                                </div>
                                <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-pink-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-pink-300"
                                    value={password}
                                    onChange={(e) => onChange(e)}
                                    name='password'
                                    required
                                    minLength="8"
                                    placeholder="Enter your password"
                                    aria-label="Enter your password"
                                    // Adding 'title' attribute to provide more context when hovering
                                    title="Password (Minimum 8 characters)"
                                    type="password" />
                            </div>
                            <div className="mt-6">
                                <button type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                    Sign In
                                </button>
                            </div>
                        </form>

                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/3 border-b border-gray-600 md:w-1/3"></span>

                            <button onClick={handleModal} className="text-xs text-gray-600 uppercase hover:underline">or Sign up</button>

                            <span className="w-1/3 border-b border-gray-600 md:w-1/3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login