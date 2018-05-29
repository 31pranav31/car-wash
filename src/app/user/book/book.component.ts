import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookingForm:FormGroup;
  constructor() { }

  onFormSubmit(){

  }
  ngOnInit() {
    this.bookingForm = new FormGroup(
      {
        'name': new FormControl(null,Validators.required),
        'email': new FormControl(null,Validators.required),
        'number': new FormControl(null,Validators.required),
        'vehicle': new FormControl(null,Validators.required),
        'numberv': new FormControl(null,Validators.required),
        'btime': new FormControl(null,Validators.required),
      }
    );
  }

}
