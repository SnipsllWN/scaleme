import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RequestBoxComponent} from "../../components/request-box/request-box.component";
import {RouteService} from "../../route.service";
import {FormsModule} from "@angular/forms";
import {AnswerquestionBoxComponent} from "../../components/answerquestion-box/answerquestion-box.component";

@Component({
  selector: 'app-nanswer',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    RequestBoxComponent,
    FormsModule,
    AnswerquestionBoxComponent
  ],
  templateUrl: './nanswer.component.html',
  styleUrl: './nanswer.component.css'
})
export class NanswerComponent {
  answers: string[] = ['ja', 'nein', 'vllt'];
  inputText = '';

  constructor(private routeService: RouteService) {
  }

  clickBackBtn(){
    this.routeService.route = this.routeService.routes.nquestion;
  }

  clickNextBtn() {
    this.routeService.route = this.routeService.routes.requests;
  }

  clickAddBtn() {
    this.answers.push(this.inputText);
    this.inputText = '';
  }
}
