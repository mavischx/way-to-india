export class DayRoutineModel {
  id: number;
  day: number; // Unix time stamp for the day
  details: Array<string>;
  state_id: number; // Should be able to retrieve state name from state id

  cities: {}; // Dictionary with the respective city id, city name, bloga

  constructor(obj: DayRoutineModel) {
    Object.assign(this, obj);
  }
}
