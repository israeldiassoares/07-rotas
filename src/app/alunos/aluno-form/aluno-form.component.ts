import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Subscription } from 'rxjs'
import { AlunosService } from './../alunos.service'
import { IFormCanDeactivate } from 'src/app/guards/Iform-candeactivate'

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: [ './aluno-form.component.scss' ]
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  protected aluno: any
  protected inscricao: Subscription
  protected formMudou: boolean

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {
    this.aluno = []
    this.inscricao = new Subscription
    this.formMudou = false
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      //passa uma funcao com oq tem q ser feito pegar id do parametro da url confirmar se existe o aluno, se existir retorna null

      (params: any) => {
        let id = params[ 'id' ]
        this.aluno = this.alunosService.getAluno(id)

        if (this.aluno === null) {
          this.aluno = {}
        }
      }
    )
  }
  salvarEdicao() {
    this.alunosService.salvarAluno(this.aluno)
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  onInput() {
    this.formMudou = true
    console.log('mudou')

  }

  podeMudarRota(): boolean {
    if (this.formMudou) {
      confirm("Tem certeza que deseja sair dessa página")
    }
    return true
  }
  podeDesativar() {
    return this.podeMudarRota()
  }
}
