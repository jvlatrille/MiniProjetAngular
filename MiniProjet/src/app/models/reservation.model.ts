export interface Reservation {
    id?: number;
    nomClient: string;
    emailClient: string;
    telClient: string;
    jeuClient: string;
    plateformeClient: string;
    reservationDate: string;
    status: 'Confirmée' | 'En attente' | 'Annulée';
}
