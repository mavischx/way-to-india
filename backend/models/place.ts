export class PlaceModel {
  id: number;
  name: string;
  location_lat: number;
  location_lon: number;
  guide_ids: Array<number>;
  photo_paths: Array<string>;
  state_id: number;
  city_id: number;
  constructor(obj) {
    Object.assign(this, obj);
  }
}
