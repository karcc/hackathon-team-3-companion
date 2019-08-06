import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HighScores} from "../../entities/HighScores";

@Injectable()
export class LeaderboardService {
  transactionUrl = 'http://ec2-34-205-166-79.compute-1.amazonaws.com:3389/hunt/scores';

  constructor(private http: HttpClient){}


  getHighScores(){
    return this.http.get<HighScores>(this.transactionUrl).subscribe((res) => {
      console.log(res);
    });
  }

}
