import {Request, Response, Router} from "express";
import { TrainScheduleController } from "../controllers/TrainScheduleController";
import { TrainSchedule } from "../controllers/TrainSchedule";


export const trainScheduleRouter = Router();  // Create a new Router for train schedules

const trainScheduleController = new TrainScheduleController();

trainScheduleRouter.get("/train_schedule", async (req: Request, res: Response) => {
    try {
        const trainSchedule = await trainScheduleController.getAllTrainSchedule();
        console.log(trainSchedule);
        res.json(trainSchedule);
    } catch (e) {
        res.status(500).json();
    }
});


trainScheduleRouter.get("/train_schedule/:id_train_schedule", async (req: Request, res: Response) => {
    try {
        const { id_train_schedule } = req.params as { id_train_schedule: string };
        const trainSchedule = await trainScheduleController.getTrainSchedule(Number(id_train_schedule));
        res.json(trainSchedule[0]);
    } catch (error) {
        res.status(500).json();
    }
});

trainScheduleRouter.post("/train_schedule", async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const trainSchedule: TrainSchedule = {
            id_train_schedule: body.id_train_schedule,
            schedule_train_num: body.schedule_train_num,
            schedule_departure_date: body.schedule_departure_date,
            schedule_departure_time: body.schedule_departure_time,
            schedule_arrival_time: body.schedule_arrival_time,
            cost: body.cost
        };
        await trainScheduleController.createTrainSchedule(trainSchedule);
        res.status(201).json(trainSchedule);
    } catch (e) {
        res.status(400).json({ message: "Failed to create Train Schedule" });
    }
});

trainScheduleRouter.put("/train_schedule/:id_train_schedule", async (req: Request, res: Response, id_train_schedule) => {
    try {
        const { id_train_schedule } = req.params as { id_train_schedule: string };
        const body = req.body;
        await trainScheduleController.updateTrainSchedule(Number(id_train_schedule), body);
        res.json({ message: "Successfully updated Train Schedule" });
    } catch (e) {
        res.status(400).json({ message: `Failed to update Train Schedule ${id_train_schedule}`});
    }
});

trainScheduleRouter.delete("/train_schedule/:id_train_schedule", async (req: Request, res: Response) => {
    try {
        const { id_train_schedule } = req.params as { id_train_schedule: string };
        await trainScheduleController.deleteTrainSchedule(Number(id_train_schedule));
        res.json({ message: "Successfully deleted Train Schedule" });
    } catch (e) {
        res.status(400).json({ message: "Failed to delete Train Schedule" });
    }
});
