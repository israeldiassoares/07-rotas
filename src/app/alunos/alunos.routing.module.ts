import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { AlunosComponent } from './alunos.component'
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component'
import { AlunoFormComponent } from './aluno-form/aluno-form.component'
import { AunosGuard } from '../guards/alunos.guard'

const ALUNOS_ROUTES: Routes = [
    {
        path: "", component: AlunosComponent,
        children: [
            { path: "novo", component: AlunoFormComponent },
            { path: ":id", component: AlunoDetalheComponent },
            { path: ":id/editar", component: AlunoFormComponent }
        ],
        canActivateChild: [AunosGuard]
    },



]

@NgModule({
    imports: [ RouterModule.forChild(ALUNOS_ROUTES) ],
    exports: [ RouterModule ]
})
export class AlunosRoutingModule { }