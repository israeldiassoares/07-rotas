import { Component, OnInit } from '@angular/core'

import { AuthService } from './auth.service'
import { Usuario } from './usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  protected usuario: Usuario

  constructor(private authService: AuthService) {
    this.usuario = { nome: "", senha: "" }
  }

  ngOnInit(): void {
  }

  fazerLogin() {
    console.log('usuario', this.usuario);
    this.authService.fazerLogin(this.usuario)
  }
}
