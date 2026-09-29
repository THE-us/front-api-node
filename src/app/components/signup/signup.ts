import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router, RouterLink } from '@angular/router'

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-signup',
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  address: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp(){
    this.authService.signUp(this.name, this.email, this.password, this.address).subscribe({
      next: (response) => {
        console.log('Usuário criado com sucesso', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.errorMessage = 'Erro ao criar usuário, tente novamente.';
        console.log(error);
      }
    });
  }
}
