import {Component, Input} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-answerquestion-box',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './answerquestion-box.component.html',
  styleUrl: './answerquestion-box.component.css'
})
export class AnswerquestionBoxComponent {

  @Input() text = '';

}
