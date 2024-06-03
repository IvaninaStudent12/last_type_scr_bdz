// @ts-ignore
import mysql2 from "mysql2";
import {Pool} from "mysql2/promise";  /*Импортиране на Pool от mysql2/promise*/

/*Експортиране на клас с име DB*/
export class DB {
    conn: Pool;  /*Свойство conn от тип Pool, което представлява самата връзка към базите данни */

    constructor() {
        /*Създаване на нов Pool от връзки към базата данни с използване на mysql2 и настройка на връзката*/
        this.conn = mysql2.createPool({
            database: "users_reservations", /*Име на базата данни в localhost/phpmyadmin*/
            host: "localhost", /*Хост на базата данни*/
            user: "root", /*Потребителско име за достъп до базата данни*/
            password: ""
        }).promise();  /*Изпозване на promise API за асинхронни заявки*/
    }
}


