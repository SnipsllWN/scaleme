import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QuestionComponent} from "./question/question.component";
import {ScalemeComponent} from "./scaleme/scaleme.component";
import {LoginComponent} from "./pages/login/login.component";
import {RouteService} from "./route.service";
import {RegisterComponent} from "./pages/register/register.component";
import {NanswerComponent} from "./pages/nanswer/nanswer.component";
import {NquestionComponent} from "./pages/nquestion/nquestion.component";
import {RequestsComponent} from "./pages/requests/requests.component";
import {RequestComponent} from "./pages/request/request.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent, ScalemeComponent, LoginComponent, RegisterComponent, NanswerComponent, NquestionComponent, RequestsComponent, RequestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scaleme';

  constructor(public routeService: RouteService) {

  }
}
