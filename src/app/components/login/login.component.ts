import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../../model/LoginUser';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../model/enum/RoutingEnum';
import { HttpService } from '../../services/httpRequest/http.service';
import { HttpHeaders } from '@angular/common/http';
import { CheckLoginService } from '../../services/checkLogin.service';
import { LoginService } from '../../services/httpRequest/httpUtilityService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private user: LoginUser = new LoginUser();
  constructor(private router: Router, private checkLoginService: CheckLoginService, private loginService: LoginService) { }

  doLogin() {
    this.loginService.executeLogin(this.user,
      (response) => {
        console.log("success");
        sessionStorage.setItem("logged", "true");
        this.checkLoginService.nextLogged(true);
        this.router.navigate(["/" + RoutingEnum.Home]);
      }, (error) => {
        console.log("error");
      });
  }

}
