import { Booking } from "./booking.model";
import { Subject } from "rxjs/Subject";

export class BookingsService {
    bookings:Booking[]=[];
    bookedService = new Subject<Booking[]>();

    getBookingsByUser(id:number){
      var list:Booking[] = [];
      for (let book of this.bookings) {
        if(book.user == id)
            list.push(book);
      }
      return list;
    }

    addBooking(booking:Booking){
      this.bookings.push(booking);
      this.bookedService.next(this.bookings.slice());
    }

}
