export class BookingModel {
  id		: 	number;
  customer_id	: 	number;
  amount	: 	number;
  package_id	:	number;
  staff_id	:	number;
  paymentid	:	number;


  constructor(obj) {
    Object.assign(this, obj);
  }
}
