import React from 'react'
import { useEffect, useState } from 'react'
import { getAllUser } from '../api/user'
import { User } from '../api/types'
import UserProfile from './UserProfile'

const AllUsers = () => {
const [users, setUsers] = useState<Array<User>>([])
async function _getAllUsers() {
    const data = await getAllUser();
    setUsers(data);
}
    useEffect(() => {
        _getAllUsers();
    }, []);
}

export default AllUsers
