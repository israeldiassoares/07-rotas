import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { IFormCanDeactivate } from 'src/app/guards/Iform-candeactivate'

// import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component'


// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }
@Injectable({ providedIn: 'root' })
//declarado no provider dentro do modulo ou do modulo global app.module
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
        component: IFormCanDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        // return component.podeMudarRota()
        return component.podeDesativar();
    }
}