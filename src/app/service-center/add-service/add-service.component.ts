import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../shared/service.service';
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  serviceForm:FormGroup ;
  constructor(private service:ServiceService) { }

  onSubmit(){
    this.service.addService(this.serviceForm.value);
    this.serviceForm.reset();
  }
  ngOnInit() {
    this.serviceForm = new FormGroup(
      {
        'name':new FormControl(null,Validators.required),
        'photo':new FormControl(null,Validators.required),
        'address':new FormControl(null,Validators.required),
        'contact':new FormControl(null,[ Validators.required, Validators.min(1000000000) ,Validators.max(9999999999)]),
        'state':new FormControl(null,Validators.required),
        'location':new FormControl(null,Validators.required),
        'city':new FormControl(null,Validators.required),
      }
    );
  }

}
