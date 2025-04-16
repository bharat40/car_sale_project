import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';



const UserTable = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const data =await axios.get('http://localhost:8000/user/getUsers');
        if (!data) {
            alert('no data found');
        } else {
            setUsers(data.data);
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <div className="overflow-x-auto shadow-md rounded-lg bg-white">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-100">
                            <td className="px-6 py-4">{user.id}</td>
                            <td className="px-6 py-4">{user.username}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
