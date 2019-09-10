import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Questions} from "../entities/Questions";
import {Observable} from "rxjs";
import {API_URL} from "./user-info-service";
import {UserInfo} from "../entities/UserInfo";

@Injectable()
export class QuestionService {

  API_URL = 'http://ec2-34-200-238-159.compute-1.amazonaws.com:3389/hunt/';

  constructor(private httpClient: HttpClient) { }

  public getQuestion(sessionKey: string): Observable<Questions> {
    return this.httpClient.get<Questions>(this.API_URL + 'question/' + sessionKey);
  }

  public sendAnswer(sessionKey: string, choice: string): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(this.API_URL + 'answer/' + sessionKey + '/' + choice);
  }

}
