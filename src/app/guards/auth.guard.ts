import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

import { AuthService } from './../login/auth.service'
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log('1ª Auth Guard - Posso ativar essa rota ?')

    return this.verificarAcesso()
  }

  private verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true
    }
    this.router.navigate([ '/login' ])
    return false
  }

  canLoad(_route: Route, _segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('canLoad: Verificando se o user pdoe carregar o modulo')

    return this.verificarAcesso()
  }

}
