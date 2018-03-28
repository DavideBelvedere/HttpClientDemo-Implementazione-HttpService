import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckLoginService } from './services/checkLogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private logged: boolean = true;

  constructor(private checkLoginService: CheckLoginService){
    this.logged = sessionStorage.getItem("logged") && sessionStorage.getItem("logged") === "true";
    this.checkLoginService.logged$.subscribe(logged=>{
      this.logged = logged;
    })
  }
}
