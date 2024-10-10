export class ItineraryModel {
  id: number;
  included_amenities: Array<string>;
  excluded_amenities: Array<string>;
  booking_id: number;
  associated_staff_ids: Array<number>; // List of staff ids
  place_ids: Array<number>; // Associated place ids
  constructor(obj: ItineraryModel) {
    Object.assign(this, obj);
  }
}
