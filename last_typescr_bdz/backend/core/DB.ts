import { createPool, Pool } from "mysql2/promise";

export class DB {
    conn: Pool;

    constructor() {
        this.conn = createPool({
            database: "users_reservations",
            host: "localhost",
            user: "root",
            password: "",
            port: 3306});
    }
}

