import { Component, OnInit } from '@angular/core';

import { AutenticacaoService } from './../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario='';
  senha='';
  constructor(private authService: AutenticacaoService) {}

  ngOnInit(): void {}

  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      console.log("Autenticado com sucesso");
    }, (error) => {
      alert("Usuário ou senha inválidos");
      console.log(error);
    }
    );
  }
}
