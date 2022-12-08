import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component'
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component'
import { CursosComponent } from './cursos/cursos.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'

const APP_ROUTES: Routes = [
    {
        path: 'cursos', component: CursosComponent
    },
    {
        path: 'curso/:id', component: CursoDetalheComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'naoEncontrado', component: CursoNaoEncontradoComponent
    },
    {
        path: '', component: HomeComponent
    }
]

export const rounting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES)