import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {MultipleChoiceTextQuestionComponent} from "./multiple-choice-text-question/multiple-choice-text-question.component";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "./login/services/login.service";
import {QuestionService} from "./services/question-service";
import {UserInfoService} from "./services/user-info-service";
import {LeaderboardService} from "./leaderboard/services/leaderboard.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InstructionsComponent,
    LeaderboardComponent,
    MultipleChoiceTextQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    UserInfoService,
    QuestionService,
    LeaderboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
