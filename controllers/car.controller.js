const Car = require('../models/Car');

// Get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cars' });
    }
};

// Get car by ID
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (!car) return res.status(404).json({ error: 'Car not found' });
        res.json(car);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching car' });
    }
};

// Add new car
exports.createCar = async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ error: 'Error creating car' });
    }
};

// Update car
exports.updateCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (!car) return res.status(404).json({ error: 'Car not found' });

        await car.update(req.body);
        res.json(car);
    } catch (error) {
        res.status(500).json({ error: 'Error updating car' });
    }
};

// Delete car
exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (!car) return res.status(404).json({ error: 'Car not found' });

        await car.destroy();
        res.json({ message: 'Car deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting car' });
    }
};
