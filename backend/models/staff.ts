export class StaffModel {
  id: number;
  name: string;
  phone: string;
  email: string;
  department: string;
  constructor(obj: StaffModel) {
    Object.assign(this, obj);
  }
}
