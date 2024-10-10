export class ItineraryModel {
  id: number;
  included_amenities: Array<string>;
  excluded_amenities: Array<string>;
  booking_id: number;
  associated_staff_ids: Array<int>;  // List of staff ids
  place_ids: Array<int>; // Associated place ids
  constructor(obj) {
    Object.assign(this, obj);
  }
}
