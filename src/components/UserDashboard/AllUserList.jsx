import { useEffect, useState } from "react";
import AllUserListTable from "./AllUserListTable";

function AllUserList() {

    const [user, setUser] = useState({});
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);
    return (
        <div>

            {user.is_Admin ? <AllUserListTable /> : <div>This is your dashboard</div>}
        </div>
    )
}

export default AllUserList