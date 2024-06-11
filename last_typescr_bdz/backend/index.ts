// @ts-ignore
import express, {Application, json} from "express";
import { reservationRouter } from "./routers/ReservationRouter";
import { trainScheduleRouter} from "./routers/TrainScheduleRouter";


const app: Application = express();
import cors = require('cors');

app.use(json());
app.use(cors());

app.use("/api", reservationRouter);
app.use("/api", trainScheduleRouter);

app.listen(3004, async () => {
    console.log("Successfully started server");
});