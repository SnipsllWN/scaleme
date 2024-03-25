import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {IRequestDetail} from "../../models/IRequestDetail";
import {RequestBoxComponent} from "../../components/request-box/request-box.component";

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RequestBoxComponent,
    NgForOf
  ],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  public requestsList: IRequestDetail[] = [{finished: false, name: "name1", id: 0},{finished: false, name: "name2", id: 1},{finished: true, name: "name3", id: 2}];
}
