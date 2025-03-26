export interface Reservation {
  id?: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  gameTitle: string;
  platform: string;
  reservationDate: string;
  status: 'Confirmée' | 'En attente' | 'Annulée';
}
