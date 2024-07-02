import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { LoginService } from '../../../auth/login.service';
import { Login } from '../../../auth/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login: Login = new Login();

  router = inject(Router);
  loginService = inject(LoginService);

  logar() {
    console.log('Enviando login:', this.login);
    this.loginService.logar(this.login).subscribe({
      next: token => {
        console.log('Token recebido:', token);
        if(token) {
          this.loginService.addToken(token);
          this.router.navigate(['admin/carros']);
        } else {
          alert('usuario ou senha incorreto');
        }

      },
      error: erro => {
        console.error('Erro ao fazer login:', erro);
        alert('Erro ao fazer login: ' + erro.message);
      }
    })
  }


}
