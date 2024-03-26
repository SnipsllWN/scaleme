import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-request-question-box',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './request-question-box.component.html',
  styleUrl: './request-question-box.component.css'
})
export class RequestQuestionBoxComponent implements OnInit {
  @Input() question = '';
  @Input() answerOptionsInput: string[] = [];
  answerOptions: IAnswer[] = [];

  selectedAnswer: number = 0;

  ngOnInit() {
    for (let i = 0; i < this.answerOptionsInput.length; i++) {
      this.answerOptions.push({answer: this.answerOptionsInput[i], selected:false, id: i})
    }
  }

  selectAnswer(answerId: number){
    let newAnswerOptions = [];
    for (let i = 0; i < this.answerOptionsInput.length; i++) {
      if(i === answerId){
        newAnswerOptions.push({answer: this.answerOptionsInput[i], selected:true, id: i})
      } else {
        newAnswerOptions.push({answer: this.answerOptionsInput[i], selected:false, id: i})
      }
    }
    this.answerOptions = newAnswerOptions;
  }

}

interface IAnswer {
  answer: string;
  selected: boolean;
  id: number;
}
