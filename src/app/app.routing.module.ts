import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component'
// import { CursosComponent } from './cursos/cursos.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'

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
        path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(hash => hash.AlunosModule)
    },
    {
        path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(hash => hash.CursosModule)
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '', component: HomeComponent
    }
]


@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRountingModule { }