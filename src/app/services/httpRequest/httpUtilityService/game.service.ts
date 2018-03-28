import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../../../model/LoginUser';
import { GameItem } from '../../../model/GameItem';

@Injectable()
export class GameService {

  constructor(private httpService: HttpService) { }

  editGame(body: GameItem, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callPut(
      body,
      'updateGame',
      null,
      (response) => {
        if (callback)
          callback(response)
      },
      (error) => {
        if (errorCallBack)
          errorCallBack(error)
      });
  }

  retrieveGameList(callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callGet(
      'getGameList',
      null,
      (response) => {
        if (callback)
          callback(response)
      },
      (error) => {
        if (errorCallBack)
          errorCallBack(error)
      });
  }

  getGameById(id: number, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callGet(
      'getGameList',
      null,
      (response: GameItem[]) => {
        let game: GameItem;
        response.forEach(item => {
          if (item.id.toString() === id.toString()) {
            game = item;
          }
        });
        if (callback && game)
          callback(game);
        else {
          if (errorCallBack)
            errorCallBack(null)
        }
      },
      (error) => {
        if (errorCallBack)
          errorCallBack(error)
      });
  }
  

}
