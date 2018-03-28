import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../model/GameItem';
import { GameService } from '../../services/httpRequest/httpUtilityService/game.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private gameList: GameItem[] = [];
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.retrieveGameList((response: GameItem[])=>{
      this.gameList = response;
    })
  }

}
