import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/httpRequest/httpUtilityService/game.service';
import { GameItem } from '../../model/GameItem';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: ActivatedRoute, private gameService: GameService) { }
  private game: GameItem;
  ngOnInit() {
    this.router.params.subscribe(param=>{
      if(param && param["id"]){
        this.gameService.getGameById(param["id"] as number, (response: GameItem)=>{
          this.game = response;
        })
      }
    });
  }

  changeGame(){
    this.gameService.editGame(this.game);
  }

}
