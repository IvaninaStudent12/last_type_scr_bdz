import { Request, Response, Router } from "express";
import { ReservationController } from "../controllers/ReservationController";
import { Reservation } from "../controllers/Reservation";

export const reservationRouter = Router();  /* Създаване на нов Router за резервациите */

const reservationController = new ReservationController();

/* Дефиниране на GET маршрут за извличане на всички резервации */
reservationRouter.get("/reservations", async (req: Request, res: Response) => {
    const reservations = await reservationController.getAllReservations();
    res.send(reservations);  /* Изпращане на получените данни за резервациите в отговора */
});

/* Дефиниране на POST маршрут за създаване на нова резервация */
reservationRouter.post("/reservations", async (req: Request, res: Response) => {
    const body = req.body; /* Извличане на тялото на заявката */
    const reservation: Reservation = {
        id_reservations: body.id_reservations,
        id_train_schedule: body.id_train_schedule,
        date_of_travelling: body.date_of_travelling,
        first_name: body.first_name,
        last_name: body.last_name,
    }; /* Създаване на нов обект Reservation с данните от тялото на заявката */
    try {
        await reservationController.createReservation(reservation);  /* Опит за създаване на нова резервация */
        res.send(reservation);
    } catch (e) {
        res.status(400).send({
            message: "Failed to create reservation"
        }); /* В случай на грешка, се изпраща отговор със статус 400 и съобщение за грешка */
    }
});

/* Дефиниране на PUT маршрут за обновяване на резервация по ID */
reservationRouter.put("/reservations/:id", async (req: Request, res: Response) => {
    const { id_reservations } = req.params; /* Извличане на ID от параметрите на URL адреса */
    await reservationController.updateReservation(Number(id_reservations), req.body);
    res.send({ id_reservations }); /* Изпращане на ID в отговора */
});

/* DELETE маршрут за изтриване на резервация по ID */
reservationRouter.delete("/reservations/:id", async (req: Request, res: Response) => {
    const { id_reservations } = req.params; /* Извличане на ID от параметрите на URL */
    await reservationController.deleteReservation(Number(id_reservations));
    res.send({ id_reservations }); /* Изпращане на ID в отговора */
});
