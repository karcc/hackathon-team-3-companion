import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserInfo} from "../../entities/UserInfo";

@Injectable()
export class LoginService {

  transactionUrl = 'https://ec2-34-205-166-79.compute-1.amazonaws.com:3389/hunt/newgame';

  constructor(private http: HttpClient){}


  register(id: string, user: UserInfo) {
    console.log('this is id: ' + id);
    console.log('this is user: ' + user);
    user.nickname = id;
    return this.postUserInfo(user);

  }

  postUserInfo(user: UserInfo){
    return this.http.post<UserInfo>(this.transactionUrl, user).subscribe((res) => {
      console.log(res);
    });
  }
}
