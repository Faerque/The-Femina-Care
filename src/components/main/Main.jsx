import { useContext } from "react"
import Login from "../auth/Login/Login"
import Signup from "../auth/Signup/Signup"
import Home from "../home/Home"
import authModal from "../../context/authContext"
import Navbar from "../global/Navbar/Navbar"


function Main() {
    const { isLoginModal, setIsLoginModal, isSignupModal, setIsSignUpModal } = useContext(authModal)

    return (
        <div>
            <Navbar />
            <Home />
            {
                isLoginModal && <Login />
            }
            {
                isSignupModal && <Signup />
            }

        </div>
    )
}



export default Main