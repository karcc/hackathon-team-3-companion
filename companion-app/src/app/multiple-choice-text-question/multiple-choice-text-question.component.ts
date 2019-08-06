<span class="timer" #timer style="width: 100%;">
</span>

import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {UserInfo} from "../entities/UserInfo";
import {Questions} from "../entities/Questions";
import {UserInfoService} from "../services/user-info-service";
import {QuestionService} from "../services/question-service";

@Component({
  selector: 'app-multiple-choice-text-question',
  templateUrl: './multiple-choice-text-question.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css'],
})
export class MultipleChoiceTextQuestionComponent implements OnInit {

  @Input()
  sessionKey: string;
<<<<<<< HEAD
=======

  isLoaded: boolean;

>>>>>>> 9b45e7aed7666578dc53595339da032779756bd9
  user: UserInfo;
  question: Questions;
  timer = undefined;

  @ViewChild('timer', undefined) timerElm: ElementRef;

  decriment: number  = 0;
  const warnningTime: number  = 65;
  const criticalTime: number  = 30;
  countdownTime: number = 60 * 1;  // 60 for secounds times whatever for minutes...

  constructor(private userService: UserInfoService,
              private questionService: QuestionService) {
    this.user = history.state.data.user;
  }

  ngOnInit() {
    this.user = history.state.data.user;
    console.log('mct: ' + this.user.sessionId);
    console.log('mctname: ' + this.user.nickname);
    this.questionService.getQuestion(this.user.sessionId).subscribe( questiondata => {
      this.question = questiondata;
      this.isLoaded = true;
    });


    // Set and check timeout intervals
    this.decriment = 100 / this.countdownTime;
    this.timer = setInterval(() => {
      this.countdownLogic();
    }, 1000);




  }

  passQuestion() {
    console.log('passing question!');
  }

  submitQuestion() {
    console.log('submitting question!');
  }

  countdownLogic() {
    if(this.countdownTime > 0) {
      this.countdownTime -= 1;
      const wdth: string = this.timerElm.nativeElement.style.width;
      const timerSize: number =  parseInt(wdth.replace('%', ''), 10) - this.decriment;

      this.timerElm.nativeElement.style.width = timerSize + "%";

      if(timerSize <= this.warnningTime &&
         timerSize >= this.criticalTime) {
          this.timerElm.nativeElement.style.backgroundColor = "#ffa600";
      } else if(timerSize <= this.warnningTime &&
                timerSize <= this.criticalTime) {
                  this.timerElm.nativeElement.style.backgroundColor = "#ff0000";
      }
    } else if (this.countdownTime <= 0) {
      clearInterval(this.timer);
      this.submitQuestion();
    }
  }
}
