import { CursosService } from '../cursos.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: [ './curso-detalhe.component.scss' ]
})
export class CursoDetalheComponent implements OnInit {

  id: number
  inscricao: Subscription
  curso: any

  constructor(private route: ActivatedRoute, private cursosService: CursosService, private router: Router) {
    // this.id = this.route.snapshot.params[ 'id' ]
    // console.log(this.route);
    this.id = 0
    this.inscricao = new Subscription()
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params[ 'id' ]

      this.curso = this.cursosService.getCurso(this.id)

      if (this.curso === null) {
        this.router.navigate([ '/naoEncontrado' ])
      }
    })
  }
  ngOnDestory() {
    this.inscricao.unsubscribe()
  }
}
