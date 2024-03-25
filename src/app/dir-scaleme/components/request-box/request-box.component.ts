import {Component, Input} from '@angular/core';
import {IRequestDetail} from "../../models/IRequestDetail";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-request-box',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './request-box.component.html',
  styleUrl: './request-box.component.css'
})
export class RequestBoxComponent {
  @Input() requestdetail: IRequestDetail | undefined;
}
