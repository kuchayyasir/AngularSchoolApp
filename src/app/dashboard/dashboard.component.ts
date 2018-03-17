import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  visible: boolean = true;
  nickName:string=''
  constructor() { 

    this.nickName="Yasir ";
  }

  ngOnInit() {
  }

  
  toggle(){
    this.visible = !this.visible;
  }
}
