import { Request, Response, Router } from "express";
import { ReservationController } from "../controllers/ReservationController";
//@ts-ignore
import { Reservation } from "../controllers/Reservation";
import { ReservationDomainModel } from "../models/ReservationDomainModel";

export const reservationRouter = Router();

const reservationController = new ReservationController();

reservationRouter.get("/reservations", async (_req: Request, res: Response) => {
    try {
        const reservations = await reservationController.getAllReservations();
        res.json(reservations);
    } catch (e: any) {
        res.status(400).send({
            message: "Failed to get reservations",
        });
    }
});

reservationRouter.get("/reservations/:id_reservations", async (req: Request, res: Response) => {
    try {
        const { id_reservations } = req.params;
        const reservation = await reservationController.getReservation(Number(id_reservations));
        res.json(reservation);
    } catch (e: any) {
        res.status(400).send({
            message: "Failed to get reservation",

        });
    }
});

reservationRouter.post("/reservations", async (req: Request, res: Response) => {
    const body: ReservationDomainModel = req.body;

    try {
        await reservationController.createReservation(body);
        res.status(201).send({
            message: "Successfully created reservation",
            reservation: body
        });
    } catch (e: any) {
        res.status(400).send({
            message: "Failed to create reservation",

        });
    }
});

reservationRouter.put("/reservations/:id_reservations", async (req: Request, res: Response, id_reservations) => {
    try {
        const { id_reservations } = req.params;
        const body: ReservationDomainModel = req.body;
        await reservationController.updateReservation(Number(id_reservations), body);
        res.send({
            message: "Successfully updated reservation"
        });
    } catch (e: any) {
        res.status(400).send({
            message: `Failed to update reservation ${id_reservations}`,

        });
    }
});

reservationRouter.delete("/reservations/:id_reservations", async (req: Request, res: Response, id_reservations) => {
    try {
        const { id_reservations } = req.params;
        await reservationController.deleteReservation(Number(id_reservations));
        res.send({
            message: "Successfully deleted reservation"
        });
    } catch (e: any) {
        res.status(400).send({
            message: `Failed to delete reservation ${id_reservations}`,

        });
    }
});
