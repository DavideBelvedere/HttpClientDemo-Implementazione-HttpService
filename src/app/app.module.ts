import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpService } from './services/httpRequest/http.service';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomRoutingModule } from './routing/custom-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CheckLoginService } from './services/checkLogin.service';
import { LoginService } from './services/httpRequest/httpUtilityService/login.service';
import { UtilityService } from './services/utility.service';
import { GameService } from './services/httpRequest/httpUtilityService/game.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    DetailComponent,
    HeaderComponent,
    HomeComponent,
    EditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, CheckLoginService, LoginService, UtilityService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
