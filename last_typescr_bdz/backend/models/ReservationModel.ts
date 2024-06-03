import { DB } from "../core/DB";
import { ReservationDomainModel } from "./ReservationDomainModel";

/* Клас ReservationModel наследява класа DB */
export class ReservationModel extends DB {
    async getAllReservations() {   /* Асинхронен метод за вземане на всички резервации */
        const [rows] = await this.conn.query("SELECT * FROM reservations"); /* Изпълнение на заявката за базата данни за извличане на всички резервации */
        return rows;  /* Връщане на получените редове от заявката */
    }

    async getReservation(id_reservations: number) {    /* Асинхронен метод за вземане на резервация по дадено ID */
        /* Изпълнение на заявка към базата данни за извличане на резервация с определено ID */
        const [rows] = await this.conn.query(`
            SELECT * FROM reservations WHERE id_reservations = ?
        `, [id_reservations]);    /* Подаване на ID като параметър на заявката */
        return rows; /* Връщане на получените редове от заявката */
    }

    /* Асинхронен метод за създаване на резервация */
    async createReservation(data: ReservationDomainModel) {
        /* Изпълнение на заявка за добавяне на нова резервация към базата данни */
        await this.conn.execute(`
            INSERT INTO reservations(id_reservations, id_train_schedule, date_of_travelling, first_name, last_name)
            VALUES(?, ?, ?, ?, ?)
        `, [
            data.id_reservations, data.id_train_schedule, data.date_of_travelling, data.first_name, data.last_name
        ]);
    }

    /* Асинхронен метод за обновяване на данни за резервация */
    async updateReservation(id_reservations: number, data: ReservationDomainModel) {
        /* Преобразуване на обекта с данни за резервацията в масив от ключ-стойност двойки */
        const reservationPropArray = Object.entries(data);

        let setStatement = "";  /* Инициализиране на празен низ за частта SET на SQL заявката */
        const setStatementValues = []; /* Инициализиране на празен масив за стойностите на SET частта на SQL заявката */

        /* Обхождане на масива с ключ-стойност двойки от данните на резервацията */
        reservationPropArray.forEach((keyValuePair, index) => {
            setStatement += `${keyValuePair[0]} = ?`; /* Добавяне на име на поле и плейсхолдър за стойност */
            setStatement += (index + 1 === reservationPropArray.length) ? " " : ", "; /* Добавяне на запетая или интервал, ако не е последният елемент */
            setStatementValues.push(keyValuePair[1]); /* Добавяне на стойността към масива със стойности */
        });
        setStatementValues.push(id_reservations); /* Добавяне на ID към масива със стойности */

        /* Изпълнение на заявка за обновяване на данните на резервация в базата данни */
        await this.conn.execute(`
            UPDATE reservations SET ${setStatement}
            WHERE id_reservations = ?
        `, setStatementValues); /* Подаване на стойностите като параметри на заявката */
    }

    /* Асинхронен метод за изтриване на резервация */
    async deleteReservation(id_reservations: number) {
        /* Изпълнение на заявка за изтриване на резервация от базата данни */
        await this.conn.execute(`
            DELETE FROM reservations WHERE id_reservations = ?
        `, [id_reservations]); /* Подаване на ID като параметър на заявката */
    }
}
