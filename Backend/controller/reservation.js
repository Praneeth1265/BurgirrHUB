import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservation.js";


const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone, branch } = req.body;
  console.log("Received branch:", branch);
  if (!firstName || !lastName || !email || !date || !time || !phone || !branch) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone, branch });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handling Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      console.log("Validation Error:", validationErrors);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default send_reservation;

