import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// import { RouterModule } from '@angular/router'

import { CursosComponent } from './cursos.component'
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component'
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component'
import { CursosService } from './cursos.service'
import { CursosRountingModule } from './cursos.routing.module'

@NgModule({
    imports: [
        CommonModule,
        CursosRountingModule
        // RouterModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [ CursosService ],
})
export class CursosModule { }
