import { Component, OnInit } from '@angular/core';
import { Service } from '../../shared/service.model';
import { ServiceService } from '../../shared/service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  services:Service[] ;
  constructor(private sers:ServiceService) { }

  ngOnInit() {
    this.services = this.sers.getServices();
  }

}
