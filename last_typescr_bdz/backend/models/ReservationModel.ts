import { DB } from "../core/DB";
import { Reservation } from "../controllers/Reservation";
import { RowDataPacket } from "mysql2/promise";

export class ReservationModel extends DB {
    async getAllReservations(): Promise<Reservation[]> {
        const [rows] = await this.conn.query<RowDataPacket[]>("SELECT * FROM reservations");
        return rows as Reservation[];
    }

    async getReservation(id_reservations: number): Promise<Reservation[]> {
        const [rows] = await this.conn.query<RowDataPacket[]>(
            "SELECT * FROM reservations WHERE id_reservations = ?",
            [id_reservations]
        );
        return rows as Reservation[];
    }

    async createReservation(data: Reservation): Promise<void> {
        await this.conn.execute(
            "INSERT INTO reservations (id_reservations, name, phone, train_from, train_to, travel_class, adults, train_num, departure_date, departure_time, arrival_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [data.id_reservations, data.name, data.phone, data.train_from, data.train_to, data.travel_class, data.adults, data.train_num, data.departure_date, data.departure_time, data.arrival_time]
        );
    }

    async updateReservation(id_reservations: number, data: Reservation): Promise<void> {
        const setStatement = Object.keys(data)
            .map((key) => `${key} = ?`)
            .join(", ");
        const values = [...Object.values(data), id_reservations];

        await this.conn.execute(
            `UPDATE reservations SET ${setStatement} WHERE id_reservations = ?`,
            values
        );
    }

    async deleteReservation(id_reservations: number): Promise<void> {
        await this.conn.execute(
            "DELETE FROM reservations WHERE id_reservations = ?",
            [id_reservations]
        );
    }
}


