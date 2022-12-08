import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRountingModule } from './app.routing.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { CursosComponent } from './cursos/cursos.component'
import { LoginComponent } from './login/login.component'
// import { rounting } from './app.routing';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component'
import { CursosService } from './cursos/cursos.service'
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    LoginComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    // rounting
    AppRountingModule
  ],
  providers: [ CursosService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
