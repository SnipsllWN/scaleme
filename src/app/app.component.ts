import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QuestionComponent} from "./question/question.component";
import {ScalemeComponent} from "./scaleme/scaleme.component";
import {LoginComponent} from "./dir-scaleme/pages/login/login.component";
import {RouteService} from "./dir-scaleme/route.service";
import {RegisterComponent} from "./dir-scaleme/pages/register/register.component";
import {HomeComponent} from "./dir-scaleme/pages/home/home.component";
import {NanswerComponent} from "./dir-scaleme/pages/nanswer/nanswer.component";
import {NquestionComponent} from "./dir-scaleme/pages/nquestion/nquestion.component";
import {RequestsComponent} from "./dir-scaleme/pages/requests/requests.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent, ScalemeComponent, LoginComponent, RegisterComponent, HomeComponent, NanswerComponent, NquestionComponent, RequestsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scaleme';

  constructor(public routeService: RouteService) {

  }
}
