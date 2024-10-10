export class PaymentModel {
  payment_id: number;
  payment_time: number; // time stamp of payment
  amount: number;

  constructor(obj: PaymentModel) {
    Object.assign(this, obj);
  }
}
