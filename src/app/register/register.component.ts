import { Component, OnInit } from '@angular/core';
import{DataService} from '../services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
schools :any;
retData:any;
model: any = {};

  constructor(private dataservice:DataService) { 
  }
  visible: boolean = true;
  
  toggle(){
    this.visible = !this.visible;
  }
  ngOnInit() {
    this.getSchool();
  }
  getSchool(): void {
    
    this.dataservice.getSchools()
        .subscribe(
           result =>{ this.retData = result;
              this.schools=this.retData.data;
          },
            error => console.log("Error :: " + error),
        )
}
register(){
  console.log(this.model);
  this.dataservice.registerStudent(this.model).subscribe(
    success =>{
      console.log(success);
    },
    error=>{
      console.log(error);
    }

  )

}
}
