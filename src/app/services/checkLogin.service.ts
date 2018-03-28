import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CheckLoginService {

  private logged: Subject<boolean> = new Subject<boolean>();

  public logged$ = this.logged.asObservable();

  public nextLogged(logged: boolean){
    this.logged.next(logged);
  }

}
