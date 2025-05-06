import express from "express";
import { Reservation } from "../models/reservation.js";

const router = express.Router();

router.delete("/delete/:id", async (req, res) => {
    try {
        const reservationId = req.params.id;
        const deletedReservation = await Reservation.findByIdAndDelete(
            reservationId
        );

        if (!deletedReservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }
        res.status(200).json({
            message: "Reservation being deleted successfully",
            reservation: deletedReservation,
        });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error deleting reservation", error: error.message });
    }
});

export default router;
