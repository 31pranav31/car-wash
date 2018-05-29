import { Component, OnInit } from '@angular/core';
import { Booking } from '../shared/booking.model';
import { BookingsService } from '../shared/bookings.service';
import { ServiceService } from "../shared/service.service";
import { Service } from "../shared/service.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  bookings:Booking[]=[];
  services:Service[]=[];
  constructor(private bookServ:BookingsService,private servService:ServiceService) { }

  ngOnInit() {
    this.bookServ.bookedService.subscribe(
      (bookings:Booking[])=>{
        this.bookings = bookings;
      }
    );
    this.bookings = this.bookServ.getBookingsByUser(1);
    this.services=this.servService.getServices();
  }

}
