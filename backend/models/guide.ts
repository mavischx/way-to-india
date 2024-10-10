export class GuideModel {
  id: number;
  name: string;
  cost: number;
  specialities: Array<number>; // Place id array
  location_lat: number;
  location_lon: number;
  constructor(obj: GuideModel) {
    Object.assign(this, obj);
  }
}
