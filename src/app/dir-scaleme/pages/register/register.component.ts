import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouteService} from "../../route.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username: string = '';
  password: string = '';

  constructor(public routeService: RouteService) {
  }

  clickRegister(){
    this.routeService.route = this.routeService.routes.login;
  }

  clickLoginLink() {
    this.routeService.route = this.routeService.routes.login;
  }
}
