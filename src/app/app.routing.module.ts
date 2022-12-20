import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CursosGuard } from './guards/cursos.guard'
import { AuthGuard } from './guards/auth.guard'

import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component'
// import { CursosComponent } from './cursos/cursos.component'

const APP_ROUTES: Routes = [
    // {
    //     path: 'cursos', component: CursosComponent
    // },
    // {
    //     path: 'curso/:id', component: CursoDetalheComponent
    // },
    // {
    //     path: 'naoEncontrado', component: CursoNaoEncontradoComponent
    // },
    {
        path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(hash => hash.AlunosModule), canActivate: [ AuthGuard ], canLoad: [ AuthGuard ]
    },
    {
        path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(hash => hash.CursosModule),
        canActivate: [ AuthGuard ], canActivateChild: [ CursosGuard ], canLoad: [ AuthGuard ]
    },
    {
        path: 'login', component: LoginComponent,
    },
    {
        path: 'home', component: HomeComponent, canActivate: [ AuthGuard ]
    },
    {
        path: '', redirectTo: '/home', pathMatch: "full"

    },
    {
        path: '**', component: PaginaNaoEncontradaComponent, //canActivate: [ AuthGuard ]
    }
]


@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRountingModule { }