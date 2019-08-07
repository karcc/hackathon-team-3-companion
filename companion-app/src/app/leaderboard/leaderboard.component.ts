import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../entities/UserInfo";
import {HighScores} from "../entities/HighScores";
import {LeaderboardService} from "./services/leaderboard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css'],
})
export class LeaderboardComponent implements OnInit {

  highscores: any;
  displayedColumns: string[] = ['position', 'name', 'score'];
  datasource: any;
  interval: any;

  constructor(private leaderboardService: LeaderboardService,
              private router: Router) { }

  ngOnInit() {
    this.getLeaderboardServiceData();
    this.interval = setInterval(() => {
      this.getLeaderboardServiceData();
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getLeaderboardServiceData(){
    this.leaderboardService.getHighScores().subscribe((res) => {
      console.log(res);
      this.highscores = res;
      this.datasource = res;
      console.log('highscores array: ' + this.highscores);
    });
  }

  onPlayAgain(){
    this.router.navigate(['/login']);
  }
}
