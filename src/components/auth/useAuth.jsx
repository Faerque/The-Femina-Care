
export default function useAuth() {

    let auth = false;

    const user = JSON.parse(localStorage.getItem("userInfo"))
    const accessToken = localStorage.getItem("access")
    if (user && accessToken) {
        return auth = true
    }
    return auth
}