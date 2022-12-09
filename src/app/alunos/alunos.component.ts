import { Component, OnInit } from '@angular/core'

import { Router } from '@angular/router';
import { AlunosService } from './alunos.service'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: [ './alunos.component.scss' ]
})
export class AlunosComponent implements OnInit {

  protected alunos: any[]
  constructor(private alunosService: AlunosService, private router: Router) {
    this.alunos = []
  }
  criarContato(){
    this.router.navigate(['/alunos', 'novo'])
  }
  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos()
  }

}
