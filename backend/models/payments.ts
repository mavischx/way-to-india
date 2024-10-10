export class PaymentModel {
  payment_id: number;
  payment_time: number; // time stamp of payment
  amount: int

  constructor(obj) {
    Object.assign(this, obj);
  }
}
