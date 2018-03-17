import { Component, OnInit } from '@angular/core';
import{DataService} from '../services/data.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
model :any ={};
  constructor(private dataservice :DataService) { }
  visible: boolean = true;
  
  toggle(){
    this.visible = !this.visible;
  }
  ngOnInit() {
  }
  setPin() {
  this.dataservice.setAuthPin(this.model)

  }
}
