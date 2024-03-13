import { Component } from '@angular/core';
import {QuestionComponent} from "../question/question.component";
import {QuestionService} from "../question.service";
import {NgForOf} from "@angular/common";
import {AnswerService} from "../answer.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-scaleme',
  standalone: true,
  imports: [
    QuestionComponent,
    NgForOf,
    FormsModule
  ],
  templateUrl: './scaleme.component.html',
  styleUrl: './scaleme.component.css'
})
export class ScalemeComponent {

  name: string = '';

  constructor(public questionService: QuestionService, public answerService: AnswerService) {
  }

}
