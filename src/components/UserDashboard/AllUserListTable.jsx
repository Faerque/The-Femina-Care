import axios from 'axios';
import { useEffect, useState } from 'react'
import femaleAvatar from '../../assets/images/Female-Avatar-3.svg'


function AllUserListTable() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/v1/all-user/')
                if (res.data) {
                    setUser(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    }, [])

    return (
        <div >
            <div className="px-4  sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Here all user information has been shown</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 ">User details of The Femina Care.</p>
            </div>
            <ul role="list" className="divide-y divide-gray-100 p-5">
                {
                    user.map((item, index) => (
                        <li

                            key={index} className="flex justify-between gap-x-6 p-5 hover:bg-base-200 cursor-pointer">
                            <div className="flex gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={femaleAvatar} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.email}</p>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">Student</p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AllUserListTable