import { Subscription } from 'rxjs'
import { AlunosService } from './../alunos.service'
import { Component, OnDestroy, OnInit } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'
import { Aluno } from '../aluno'

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: [ './aluno-detalhe.component.scss' ]
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  protected aluno: Aluno
  protected inscricao: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService) {
    this.inscricao = new Subscription()

    this.aluno = { 'email': '', 'id': 0, 'nome': '' }
  }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params[ 'id' ]
    //     this.aluno = this.alunosService.getAluno(id)
    //   }
    // )
    console.log('ngOnInit: AlunoDetalheComponet')

    this.inscricao = this.route.data.subscribe(
      (informacao) => {
        console.log('Recebendo o obj Aluno do resolver')
        this.aluno = informacao[ 'aluno' ]
      }
    )
  }
  editarContato() {
    this.router.navigate([ '/alunos', this.aluno.id, "editar" ])
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}
