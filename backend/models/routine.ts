export class DayRoutineModel {
  id: number;
  day: number; // Unix time stamp for the day
  details: Array<string>;
  state_id: int; // Should be able to retrieve state name from state id

  cities: {}; // Dictionary with the respective city id, city name, bloga

  constructor(obj) {
    Object.assign(this, obj);
  }
}
