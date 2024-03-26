import {Component, Input} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouteService} from "../../route.service";
import {RequestQuestionBoxComponent} from "../../components/request-question-box/request-question-box.component";

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    RequestQuestionBoxComponent
  ],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {

  @Input() routeParams = '';

  request = {
    name: 'david',
    questions: ['widddddddddddddddddddddddddddddddddddddddddddddddddddddddde alt?', 'woher?', 'was machst du?','wie alt?', 'woher?', 'was machst du?','wie alt?', 'woher?', 'was machst du?','wie alt?', 'woher?', 'was machst du?','wie alt?', 'woher?', 'was machst du?','wie alt?', 'woher?', 'was machst du?','wie alt?', 'woher?', 'was machst du?'],
    answeroptions: ['ja', 'nein', 'vllt']
  }

  constructor(private routeService: RouteService) {
  }

  clickBackBtn() {
    this.routeService.route = this.routeService.routes.requests;
  }

  clickSubmitBtn() {
    this.routeService.route = this.routeService.routes.requests;
  }

}
