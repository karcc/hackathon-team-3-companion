import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InstructionsComponent} from './instructions/instructions.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {MultipleChoiceTextQuestionComponent} from "./multiple-choice-text-question/multiple-choice-text-question.component";


const routes: Routes = [
  { path: 'mctquestion', component: MultipleChoiceTextQuestionComponent},
  { path: 'login', component: LoginComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
