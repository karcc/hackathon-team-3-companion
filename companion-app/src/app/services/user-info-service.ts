import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserInfo} from "../entities/UserInfo";
import {Observable} from "rxjs";

export const API_URL = 'https://ec2-34-205-166-79.compute-1.amazonaws.com:3389/';

@Injectable()
export class UserInfoService {

  constructor(private httpClient: HttpClient) { }

  public getUser(sessionKey: string): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(API_URL + '/question/' + sessionKey);
  }



}
