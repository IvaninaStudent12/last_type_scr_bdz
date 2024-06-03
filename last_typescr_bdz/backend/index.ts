// @ts-ignore
import express, { Application, json } from "express";
import { reservationRouter } from "./routers/ReservationRouter";
import * as mysql from "mysql2/promise";
// @ts-ignore
import cors from "cors";

const app: Application = express();

app.use(json());
app.use(cors());

app.use("/api", reservationRouter);

app.listen(3004, async () => {
    console.log("Successfully started server");

    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "users_reservations"
        });
        const [rows, fields] = await connection.execute("SELECT * FROM reservations");
        console.log(rows);
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
});
