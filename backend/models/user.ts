export class UserModel {
  id: number;
  full_name: string;
  email: string;
  cart: Array<number>; // Stores a list of booking ids
  purchase_history: Array<number>; // Stores a list of booking ids
  places_of_interest: Array<number>; // Stores a list of place ids
  constructor(obj: UserModel) {
    Object.assign(this, obj);
  }
}
