export interface ReservationDomainModel {
    id_reservations: number,
    name: string,
    phone: string,
    train_from: string,
    train_to: string,
    travel_class: string,
    adults: number,
    train_num: string,
    departure_date: Date,
    departure_time: string,
    arrival_time: string
}
