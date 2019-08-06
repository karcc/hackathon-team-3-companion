import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserInfo} from "../../entities/UserInfo";
import {Observable} from "rxjs";
import {API_URL} from "../../services/user-info-service";

@Injectable()
export class LoginService {

  transactionUrl = 'http://ec2-34-205-166-79.compute-1.amazonaws.com:3389/hunt/newgame';

  constructor(private http: HttpClient){}


  postUserInfo(nickname: string, user: UserInfo): Observable<UserInfo>{
    user.nickname = nickname;
    return this.http.post<UserInfo>(this.transactionUrl, user);
  }
}
