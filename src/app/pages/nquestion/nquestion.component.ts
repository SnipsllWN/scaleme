import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouteService} from "../../route.service";
import {FormsModule} from "@angular/forms";
import {AnswerquestionBoxComponent} from "../../components/answerquestion-box/answerquestion-box.component";

@Component({
  selector: 'app-nquestion',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    AnswerquestionBoxComponent,
    NgForOf
  ],
  templateUrl: './nquestion.component.html',
  styleUrl: './nquestion.component.css'
})
export class NquestionComponent {

  questions: string[] = ["was machst du?", "wer bist du?", "wie alt bin ich?"];
  inputText: string = '';
  constructor(private routeService: RouteService) {
  }

  clickBackBtn(){
    this.routeService.route = this.routeService.routes.requests;
  }

  clickNextBtn() {
    this.routeService.route = this.routeService.routes.nanswer;
  }

  clickAddBtn() {
    this.questions.push(this.inputText);
    this.inputText = '';
  }
}
