import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../../../model/LoginUser';

@Injectable()
export class LoginService {

  constructor(private httpService: HttpService) { }

  executeLogin(user: LoginUser, callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(user.username + ":" + user.password)
    });
    this.httpService.callGet(
      'auth/login', 
      header, 
      (response)=>{
        if(callback)
        callback(response)
      }, 
      (error)=>{
        if(errorCallBack)
        errorCallBack(error)
      });
  }

}
