import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  public route: number = 5;
  public routes = RoutesEnum;
  constructor() {

  }
}
enum RoutesEnum {
  login ,
  register,
  home ,
  requests,
  nquestion,
  nanswer
}
