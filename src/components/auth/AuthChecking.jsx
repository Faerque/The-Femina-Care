import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";


export default function AuthChecking() {

    const auth = true
    return auth ? <Outlet /> : <Navigate to='/home' />
}
