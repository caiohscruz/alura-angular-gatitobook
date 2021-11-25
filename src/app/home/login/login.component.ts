import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  username: string = '';
  password: string = '';

  login() {
    this.authService.authenticate(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['animals']);
      },
      (error) => {
        alert('Credenciais inválidas');
        console.log(error);
      }
    );
  }
}
