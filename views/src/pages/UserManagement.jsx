import React from 'react'
import UserTable from '../components/UserTable'

const UserManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel - User List</h1>
      <UserTable />
    </div>
  )
}

export default UserManagement
