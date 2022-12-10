import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable, of } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AunosGuard implements CanActivateChild {

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


        console.log('route', childRoute, ' state ', state)
        if (state.url.includes('editar')) {
            alert("Usuário sem acesso")
            console.log('of ', of())

            return of(false)
        }
        return true
    }
}