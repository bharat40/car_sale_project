import React from 'react'
import CarTable from '../components/CarTable'

const CarManagement = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel - User List</h1>
                <CarTable />
            </div>
        </div>
    )
}

export default CarManagement
