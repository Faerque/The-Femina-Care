import { useState } from 'react'
import './App.css'
import Main from './components/main/Main'
import authModal from './context/authContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mainboard from './components/UserDashboard/Mainboard'
import UserInformation from './components/UserDashboard/UserInformation/UserInformation'
import Services from './components/services/Services'
import AuthChecking from './components/auth/authChecking'
import UserConsultationInformation from './components/UserDashboard/UserConsultationInformation/UserConsultationInformation'


function App() {

  const [isLoginModal, setIsLoginModal] = useState(false)
  const [isSignupModal, setIsSignUpModal] = useState(false)

  console.log(isLoginModal)
  return (
    <>
      <BrowserRouter>
        <authModal.Provider value={{ isLoginModal, setIsLoginModal, isSignupModal, setIsSignUpModal }}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/*' element={<AuthChecking />}>
              <Route path='Services' element={<Services />} />
              <Route path='dashboard' element={<Mainboard />} />
              <Route path='dashboard/userInformation' element={<UserInformation />} />
              <Route path='dashboard/userConsultation' element={<UserConsultationInformation />} />
            </Route>
          </Routes>
        </authModal.Provider>
      </BrowserRouter>

    </>
  )
}

export default App
