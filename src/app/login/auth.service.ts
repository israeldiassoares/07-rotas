import { Router } from '@angular/router'
import { EventEmitter, Injectable } from '@angular/core'
import { Usuario } from './usuario'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean

  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) {
    this.usuarioAutenticado = false
  }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === "usuario@email.com" && usuario.senha === "asdf123") {
      this.usuarioAutenticado = true
      this.mostrarMenuEmmiter.emit(true)
      this.router.navigate([ '/' ])
    } else {
      this.usuarioAutenticado = false
      this.mostrarMenuEmmiter.emit(false)
    }
  }
}
