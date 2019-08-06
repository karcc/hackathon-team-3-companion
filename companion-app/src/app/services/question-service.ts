import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Questions} from "../entities/Questions";
import {Observable} from "rxjs";
import {API_URL} from "./user-info-service";

@Injectable()
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  public getQuestion(sessionKey: string) : Observable<Questions> {
    return this.httpClient.get<Questions>(API_URL + '/question/' + sessionKey);
  }

}
