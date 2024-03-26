import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouteService} from "../../route.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public routeService: RouteService) {
  }

  clickLoginBtn(){
    this.routeService.route = this.routeService.routes.requests;
  }

  clickRegisterLink() {
    this.routeService.route = this.routeService.routes.register;
  }
}
