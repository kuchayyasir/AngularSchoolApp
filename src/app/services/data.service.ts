import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable()
export class DataService {
  Isverified :boolean= false;
  constructor(private http:HttpClient,private router:Router) { 
   
  }
  getSchools(){
        return this.http.get('/temp/api.php?q=getSchools');
                  
  }
  registerStudent(data :any){
    console.log(data.nickname);
    return this.http.post('/temp/api.php?q=register',{'school_id':1001,'student_id':270012,'password':'something123'});
              
}
  setAuthPin(pin :any){
    localStorage.setItem('pin',pin.pin);
  }
  verifyAuthPin(pin:any){
    console.log(localStorage.getItem('pin'));
    console.log(pin.password);
    if (localStorage.getItem('pin')==pin.password) {
      this.Isverified=true;
      return true;
  }
  }
  isVerified()
  {
    return this.Isverified;
  }
}
