import axios from "axios";
import React, { useEffect, useState } from "react";

const CarTable = () => {
    const [cars, setCars] = useState([]);
    const fetchData = async () => {
        const data = await axios.get('http://localhost:8000/car');
        if (!data) {
            alert('no data found');
        } else {
            setCars(data.data);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-center">Car List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Make</th>
                            <th className="px-6 py-3">Model</th>
                            <th className="px-6 py-3">Year</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Fuel type</th>
                            <th className="px-6 py-3">Transmition</th>
                            <th className="px-6 py-3">Color</th>
                            <th className="px-6 py-3">Engine capacity</th>
                            <th className="px-6 py-3">Seating capacity</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {cars.map((car) => (
                            <tr key={car.id} className="hover:bg-gray-50">
                                <th className="px-6 py-3">{car.car_id}</th>
                                <th className="px-6 py-3">{car.make}</th>
                                <th className="px-6 py-3">{car.model}</th>
                                <th className="px-6 py-3">{car.year}</th>
                                <th className="px-6 py-3">{car.year}</th>
                                <th className="px-6 py-3">{car.fuel_type}</th>
                                <th className="px-6 py-3">{car.transmission}</th>
                                <th className="px-6 py-3">{car.color}</th>
                                <th className="px-6 py-3">{car.engine_capacity}</th>
                                <th className="px-6 py-3">{car.seating_capacity}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CarTable;

