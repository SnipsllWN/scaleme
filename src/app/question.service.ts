import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  answerOptions: string[] = ['ja', 'nein', 'vllt', 'idk'];
  questions: string[] = ['magst du mich?', 'liebst du mich?', 'treffen?', 'würdest du was mit mir anfangen?']
  constructor() { }
}
