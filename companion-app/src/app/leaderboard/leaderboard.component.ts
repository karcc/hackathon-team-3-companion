import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../entities/UserInfo";
import {HighScores} from "../entities/HighScores";
import {LeaderboardService} from "./services/leaderboard.service";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css'],
})
export class LeaderboardComponent implements OnInit {

  highscores: any;

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit() {
    this.leaderboardService.getHighScores().subscribe((res) => {
      console.log(res);
      this.highscores = res;
      console.log('highscores array: ' + this.highscores);
    });


  }

}
