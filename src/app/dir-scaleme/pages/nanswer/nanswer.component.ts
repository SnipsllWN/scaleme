import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RequestBoxComponent} from "../../components/request-box/request-box.component";

@Component({
  selector: 'app-nanswer',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    RequestBoxComponent
  ],
  templateUrl: './nanswer.component.html',
  styleUrl: './nanswer.component.css'
})
export class NanswerComponent {
  answerOptions: string[] = ["was machst du?", "wer bist du?", "wie alt bin ich?"];
}
