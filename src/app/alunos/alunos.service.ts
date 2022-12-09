import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  //Chamada para APIS
  //ENDPOINS, JSONS, OBJETOS a serem consumidos pelos componentes vai tudo aqui
  private alunos: any[]

  constructor() {
    this.alunos = [
      { id: 1, nome: 'Diogo', email: 'aluno01@email.com' },
      { id: 2, nome: "Pedrão", email: 'aluno02@email.com' },
      { id: 3, nome: "Boleta", email: 'aluno03@email.com' }
    ]
  }

  getAlunos() {
    return this.alunos
  }
  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[ i ]
      if (aluno.id == id) {
        return aluno
      }
    }
    return null
  }
  salvarAluno(aluno: any) {
    let todosAlunos = this.alunos
    for (let i = 0; i < todosAlunos.length; i++) {
      if (aluno.id === todosAlunos[ i ].id) {
        return {}
      }
    }
    return this.alunos.push(aluno)
  }

}
