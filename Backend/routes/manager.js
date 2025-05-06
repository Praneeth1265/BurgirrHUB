import express from 'express';
import { dbConnection } from '../database/dbConnection.js';
import { Reservation } from '../models/reservation.js';

const router = express.Router();

dbConnection();

router.get('/api/reservations', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving reservations', error });
    }
});

export default router;
