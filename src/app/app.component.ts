import { Subscription } from 'rxjs'
import { AuthService } from './login/auth.service'
import { Component, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = '07-rotas';

  mostrarMenu: boolean
  inscricao: Subscription

  constructor(private authService: AuthService) {
    this.mostrarMenu = false
    this.inscricao = new Subscription
  }

  ngOnInit() {
    this.inscricao = this.authService.mostrarMenuEmmiter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}
