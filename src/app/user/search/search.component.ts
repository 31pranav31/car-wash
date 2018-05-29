import { Component, OnInit } from '@angular/core';
import { Service } from '../../shared/service.model';
import { ServiceService } from '../../shared/service.service';
import { Booking } from '../../shared/booking.model';
import { BookingsService } from '../../shared/bookings.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  services:Service[] ;
  constructor(private sers:ServiceService,private bookServ:BookingsService) { }

  ngOnInit() {
    this.services = this.sers.getServices();
  }
  bookService(center:number){
    const time = new Date();
    const t = time.getTime();
    const booking = new Booking(center,1,t,1);
    this.bookServ.addBooking(booking);

  }
}
