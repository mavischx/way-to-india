export class StaffModel {
  id: number;
  name: string;
  phone: string;
  email: string;
  department: string;
  constructor(obj) {
    Object.assign(this, obj);
  }
}
