import { Component, OnInit } from '@angular/core';
import { ReqService } from 'src/app/services/req.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  
  subRv: Subscription = new Subscription
  rendezvous: any = []
  page: number = 1
  encours!: string
  attente!: string
  annule!: string
  termine!: string
  row: number = 0
  annulable: boolean = false
  name: any
  email: any
  age: any
  genre: any
  tel: any
  urlImg: any
  constructor(
    private req: ReqService
  ) { }

  ngOnInit(): void {
    this.urlImg = localStorage.getItem('photo')
    this.name = localStorage.getItem('prenom')+' '+localStorage.getItem('nom')
    this.email = localStorage.getItem('email')
    this.age = localStorage.getItem('age')
    this.tel = localStorage.getItem('telephone')
    this.genre = localStorage.getItem('genre')
    this.getMesRv(this.page)
  }

  getMesRv(page: any){
    this.subRv = this.req.mesRv(page).subscribe(
      resp => {
        if(resp.code == 200){
          this.rendezvous = resp.data.rv
          this.encours = resp.data.encours
          this.attente = resp.data.attente
          this.annule = resp.data.annuler
          this.termine = resp.data.termine
          this.row = resp.total

        }
      }
    )
  }

  paginate(event: any){
    this.page = event.page+1
    this.getMesRv(this.page)
  }

  ngOnDestroy(): void {
    if(this.subRv){
      this.subRv.unsubscribe()
    }
    
  }

}
