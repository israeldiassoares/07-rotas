import { Observable } from 'rxjs'
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: "root"
})
export class CursosGuard implements CanActivateChild {

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return true
    }

}