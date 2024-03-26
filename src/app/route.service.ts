import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  public route: number = 0;
  public routeParams = '1';
  public routes = RoutesEnum;
  constructor() {

  }
}
enum RoutesEnum {
  login ,
  register,
  request ,
  requests,
  nquestion,
  nanswer
}
