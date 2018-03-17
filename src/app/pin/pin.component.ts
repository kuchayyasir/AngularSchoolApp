import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {
model: any ={};
check :any;
  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit() {
  }
  verify(){
    console.log(this.model);
      this.dataservice.verifyAuthPin(this.model);
  }
}
