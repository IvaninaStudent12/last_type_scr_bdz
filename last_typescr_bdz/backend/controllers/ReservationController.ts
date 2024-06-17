import { ReservationModel } from "../models/ReservationModel";
import { Reservation } from "./Reservation";

export class ReservationController {
    private reservationModel: ReservationModel;

    constructor() {
        this.reservationModel = new ReservationModel();
    }

    async getAllReservations(): Promise<Reservation[]> {
        return await this.reservationModel.getAllReservations();
    }

    async getReservation(id_reservations: number): Promise<Reservation> {
        const [reservation] = await this.reservationModel.getReservation(id_reservations);
        return reservation;
    }

    async createReservation(data: Reservation): Promise<void> {
        return await this.reservationModel.createReservation(data);
    }

    async updateReservation(id_reservations: number, data: Reservation): Promise<void> {
        return await this.reservationModel.updateReservation(id_reservations, data);
    }

    async deleteReservation(id_reservations: number): Promise<void> {
        return await this.reservationModel.deleteReservation(id_reservations);
    }
}
