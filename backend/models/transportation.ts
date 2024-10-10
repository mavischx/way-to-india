export class TransportationModel {
  id: number;
  mode: number; // mode enum associated with the transport
  cost: number;
  start_location_lat: number; // latitude of the start route
  start_location_lon: number; // longitude of the start route
  end_location_lat: number; // latitude of the start route
  end_location_lon: number; // longitude of the start route
  constructor(obj: TransportationModel) {
    Object.assign(this, obj);
  }
}
