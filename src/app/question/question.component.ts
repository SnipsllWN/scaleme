import {Component, Input} from '@angular/core';
import {QuestionService} from "../question.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  @Input() question = '';

  constructor(public questionService: QuestionService) {
  }

}
