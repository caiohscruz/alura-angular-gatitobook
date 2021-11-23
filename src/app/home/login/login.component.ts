import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  username: string = '';
  password: string = '';

  login() {
    this.authService.authenticate(this.username, this.password)
      .subscribe(
        ()=> {
          console.log("Ok")
        },
        (error) =>{
          alert("Credenciais inválidas")
          console.log(error)
        }
      )

  }
}
