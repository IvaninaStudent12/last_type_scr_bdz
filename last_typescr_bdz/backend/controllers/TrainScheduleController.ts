import {TrainScheduleModel} from "../models/TrainScheduleModel";
import {TrainSchedule} from "./TrainSchedule";

export class TrainScheduleController {
    private TrainScheduleModel: TrainScheduleModel;

    constructor() {
        this.TrainScheduleModel = new TrainScheduleModel();
    }


    async getAllTrainSchedule() {
        return await this.TrainScheduleModel.getAllTrainSchedule();
    }

    async getTrainSchedule(id_train_schedule: number) {
        return await this.TrainScheduleModel.getTrainSchedule(id_train_schedule);
    }

    async createTrainSchedule(data: TrainSchedule) {
        return await this.TrainScheduleModel.createTrainSchedule(data);
    }

    async updateTrainSchedule(id_train_schedule: number, data: TrainSchedule) {
        return await this.TrainScheduleModel.updateTrainSchedule(id_train_schedule, data);
    }

    async deleteTrainSchedule(id_train_schedule: number) {
        return await this.TrainScheduleModel.deleteTrainSchedule(id_train_schedule);
    }
}
