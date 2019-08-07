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

  isLoaded: boolean;

  selectedAnswer: string;

  user: UserInfo;
  question: Questions;
  timer = undefined;

  @ViewChild('timer', undefined) timerElm: ElementRef;

  decriment: number  = 0;
  warnningTime: number  = 65;
  criticalTime: number  = 30;
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

    this.setInitialTimer();

    console.log('question choices: ' + this.question.choices);


    // Set and check timeout intervals
    this.decriment = 100 / this.countdownTime;
    this.timer = setInterval(() => {
      this.runCountdownLogic();
    }, 1000);


  }

  passQuestion() {
    console.log('passing question!');
  }

  selectAnswer(choice: string): void {
    console.log('Selected answer: ' + choice);
    this.selectedAnswer = choice;
  }

  sendAnswer(): void {
    console.log('sending answer: ' + this.selectedAnswer);
    this.questionService.sendAnswer(this.user.sessionId, this.selectedAnswer).subscribe( userData => {
      this.user = userData;
      if(this.user.correct == true) {
        console.log('Question answered correctly!');
        this.questionService.getQuestion(this.user.sessionId).subscribe( questiondata => {
          this.question = questiondata;
          this.isLoaded = true;
        });
      }
    });
  }

  submitQuestion() {
    console.log('submitting question!');
  }

  setInitialTimer() {
    // Set and check timeout intervals
    this.decriment = 100 / this.countdownTime;
    this.timer = setInterval(() => {
      this.runCountdownLogic();
    }, 1000);
  }

  runCountdownLogic() {
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
