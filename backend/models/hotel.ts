export class HotelModel {
  id: number;
  name: string;
  description: string;
  small_image_path: string;
  large_image_path: string;
  hotel_type: number;  // Could be an enum of budget, standard, deluxe, luxury
  large_image_paths: Array<string>;
  thumb_image_paths: Array<string>;
  rating: number;
  cost: number;
  types_of_rooms: Array<string>; // Array representing all the room type enums
  google_map_script: string; // Google maps embed code
  state: number;
  city: number;
  food_type: Array<number>; // Ids with food types
  facilites: {}; // Dictionary of string and booleans
  facilites_image_path: string;
  constructor(obj) {
    Object.assign(this, obj);
  }
}
