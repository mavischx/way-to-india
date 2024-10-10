export class RoomModel {
  id: number;
  room_number: number;
  hotel_id: number;
  cost: number; // Daily cost
  floor: number; // Floor number
  amenities: {}; // Dictioanry of string and bools
  constructor(obj: RoomModel) {
    Object.assign(this, obj);
  }
}
