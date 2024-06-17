import { DB } from "../core/DB";
import { TrainScheduleDomainModel } from "./TrainScheduleDomainModel";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";

export class TrainScheduleModel extends DB {
    async getAllTrainSchedule(): Promise<RowDataPacket[]> {
        const [rows] = await this.conn.query<RowDataPacket[]>("SELECT * FROM train_schedule");
        return rows;
    }

    async getTrainSchedule(id_train_schedule: number): Promise<RowDataPacket[]> {
        const [rows] = await this.conn.query<RowDataPacket[]>("SELECT * FROM train_schedule WHERE id_train_schedule = ?", [id_train_schedule]);
        return rows;
    }

    async createTrainSchedule(data: TrainScheduleDomainModel): Promise<ResultSetHeader> {
        const [result] = await this.conn.execute<ResultSetHeader>(
            "INSERT INTO train_schedule(id_train_schedule, schedule_train_num, schedule_departure_date, schedule_departure_time, schedule_arrival_time, cost) VALUES (?, ?, ?, ?, ?, ?)",
            [data.id_train_schedule, data.schedule_train_num, data.schedule_departure_date, data.schedule_departure_time, data.schedule_arrival_time, data.cost]
        );
        return result;
    }

    async updateTrainSchedule(id_train_schedule: number, data: TrainScheduleDomainModel): Promise<ResultSetHeader> {
        const setStatement = Object.keys(data).map(key => `${key} = ?`).join(", ");
        const values = Object.values(data);
        values.push(id_train_schedule);
        const [result] = await this.conn.execute<ResultSetHeader>(`UPDATE train_schedule SET ${setStatement} WHERE id_train_schedule = ?`, values);
        return result;
    }

    async deleteTrainSchedule(id_train_schedule: number): Promise<ResultSetHeader> {
        const [result] = await this.conn.execute<ResultSetHeader>("DELETE FROM train_schedule WHERE id_train_schedule = ?", [id_train_schedule]);
        return result;
    }
}
