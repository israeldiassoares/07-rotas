import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { CursosModule } from './cursos/cursos.module'
import { AppRountingModule } from './app.routing.module'
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
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    // rounting
    CursosModule,
    AppRountingModule
  ],
  // providers: [ CursosService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
