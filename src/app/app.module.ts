import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'

import { AppRountingModule } from './app.routing.module'
import { AuthService } from './login/auth.service'
import { FormsModule } from '@angular/forms';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component'
// import { CursosModule } from './cursos/cursos.module'
// import { AlunosModule } from './alunos/alunos.module'
// import { AlunosComponent } from './alunos/alunos.component'
// import { CursosComponent } from './cursos/cursos.component'
// import { rounting } from './app.routing';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component'
// import { CursosService } from './cursos/cursos.service'
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    // AlunosComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    // rounting
    // CursosModule,
    // AlunosModule,
    BrowserModule,
    AppRountingModule,
    FormsModule
  ],
  providers: [
    AuthService
    //  CursosService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
