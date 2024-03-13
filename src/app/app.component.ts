import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QuestionComponent} from "./question/question.component";
import {ScalemeComponent} from "./scaleme/scaleme.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent, ScalemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scaleme';
}
