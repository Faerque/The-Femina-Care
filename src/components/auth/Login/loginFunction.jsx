import axios from 'axios';


// const url = `http://127.0.0.1:8000/auth/`

const checkAuthenticated = async (access) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    const body = JSON.stringify({ token: access })
    try {
        const res = await axios.post(`http://127.0.0.1:8000/auth/jwt/verify/`, body, config)
        if (res.code !== 'token_not_valid') {
            return true
        }
    } catch (error) {
        console.log(error);
        return false; // Return false in case of any error
    }
}


const login = async (email, password) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password })
    try {
        const res = await axios.post(`http://127.0.0.1:8000/auth/jwt/create/`, body, config)
        if (res) {
            const isAuthenticated = await checkAuthenticated(res.data.access)
            console.log(res)
            localStorage.setItem('access', res.data.access)
            if (isAuthenticated) {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${localStorage.getItem('access')}`,
                        'Accept': 'application/json'
                    }
                }
                const res = await axios.get(`http://127.0.0.1:8000/auth/users/me/`, config);
                if (res) {
                    localStorage.setItem('userInfo', JSON.stringify(res.data))
                }
                return true
            } else {
                console.log('Authentication failed');

            }
        } else {
            console.log('Authentication failed');
        }
    } catch (error) {
        return false
    }

}

export default login
