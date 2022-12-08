import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'

import { CursosService } from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: [ './cursos.component.scss' ]
})
export class CursosComponent implements OnInit {
  cursos: any[]
  pagina: number
  inscricao: Subscription
  constructor(private cursosService: CursosService, private route: ActivatedRoute, private router: Router) {
    this.cursos = []
    this.pagina = 0
    this.inscricao = new Subscription()

  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
    console.log(this.route)

    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams[ 'pagina' ]
    })
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  proximaPagina() {
    // this.pagina++
    this.router.navigate([ '/cursos' ], { queryParams: { 'pagina': ++this.pagina } })
  }
}
