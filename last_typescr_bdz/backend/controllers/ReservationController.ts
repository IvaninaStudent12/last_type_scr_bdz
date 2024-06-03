import {ReservationModel} from "../models/ReservationModel";
import {Reservation} from "./Reservation";

export class ReservationController {
    private reservationModel: ReservationModel;

    constructor() {
        this.reservationModel = new ReservationModel();
    }

    /*Метод за вземане на всички потребители*/
    async getAllReservations() {
        return await this.reservationModel.getAllReservations();
    }

    async getReservation(id_reservations: number) {
        return await this.reservationModel.getReservation(id_reservations);
    }

    /*Създаване на нов потребител*/
    async createReservation(data: Reservation) {
        return await this.reservationModel.createReservation(data);
    }

    /*Обновяване на потребителски данни */
    async updateReservation(id_reservations: number, data: Reservation) {
        return await this.reservationModel.updateReservation(id_reservations, data);
    }

    /*Изтриване на потребител*/
    async deleteReservation(id_reservations: number) {
        return await this.reservationModel.deleteReservation(id_reservations);
    }
}

