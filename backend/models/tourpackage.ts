export class TourPackageModel {
  id: number;
  booking_id: number;
  description: number;
  start_date: number; // Unix time stamp for the day
  end_date: number; // Unix time stamp for the day
  package_type: number; // Enum type like Deluxe, Standard, Luxury
  hotels: Array<number>;
  places_of_interest: Array<number>;
  guide_ids: Array<number>; // Associated guides
  itinerary_id: number;
  constructor(obj: TourPackageModel) {
    Object.assign(this, obj);
  }
}
