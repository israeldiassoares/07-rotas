import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { AlunosComponent } from './alunos.component'
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component'
import { AlunoFormComponent } from './aluno-form/aluno-form.component'
import { AunosGuard } from './guards/alunos.guard'
import { AlunosDeactivateGuard } from '../alunos/guards/alunos-deactivate.guard'
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const ALUNOS_ROUTES: Routes = [
    {
        path: "", component: AlunosComponent,
        children: [
            { path: "novo", component: AlunoFormComponent },
            {
                path: ":id", component: AlunoDetalheComponent, resolve: {
                    aluno : AlunoDetalheResolver
                }
            },
            { path: ":id/editar", component: AlunoFormComponent, canDeactivate: [ AlunosDeactivateGuard ] }
        ],
        canActivateChild: [ AunosGuard ]
    },



]

@NgModule({
    imports: [ RouterModule.forChild(ALUNOS_ROUTES) ],
    exports: [ RouterModule ]
})
export class AlunosRoutingModule { }