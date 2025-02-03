import express from 'express';
import { getReservations, getReservationById, addReservation, updateReservation, deleteReservation } from '../controllers/reservationController.js';

const router = express.Router();

router.get('/reservations', getReservations);
router.get('/reservations/:id', getReservationById);
router.post('/reservations', addReservation);
router.put('/reservations/:id', updateReservation);
router.delete('/reservations/:id', deleteReservation);

export default router;
