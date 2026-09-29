import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  private apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient){}

  signUp(name: string, email: string, password: string, address: string){
    const dados = { name, email, password, address };
    return this.http.post('${this.apiUrl}/sign-up', dados);
  }

  login(email: string, password: string){
    const dados = { email, password };
    return this.http.post('${this.apiUrl}/login', dados);
  }
}
