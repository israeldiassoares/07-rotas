import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component'
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component'
import { CursosComponent } from './cursos.component'

const CURSOS_ROUTES: Routes = [
    {
        path: 'cursos', component: CursosComponent
    },
    {
        path: 'curso/:id', component: CursoDetalheComponent
    },
    {
        path: 'naoEncontrado', component: CursoNaoEncontradoComponent
    }
]


@NgModule({
    imports: [ RouterModule.forChild(CURSOS_ROUTES) ],
    exports: [ RouterModule ]
})
export class CursosRountingModule { }