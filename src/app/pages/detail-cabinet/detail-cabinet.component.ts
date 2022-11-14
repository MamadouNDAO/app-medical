import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ReqService } from 'src/app/services/req.service';

@Component({
  selector: 'app-detail-cabinet',
  templateUrl: './detail-cabinet.component.html',
  styleUrls: ['./detail-cabinet.component.css']
})
export class DetailCabinetComponent implements OnInit {
  isView: boolean = false
  @ViewChild('myDiv') myDiv: any;
  page:any = document.getElementById('test')
  value!: Date;
  minDate!: Date;
  firstSub: Subscription = new Subscription;
  cabinets: any = []
  domaines: any[] = []
  selectedDomaines: any[] = [];
  filteredDomaines: any[] = [];
  subDom: Subscription = new Subscription
  subRv: Subscription = new Subscription
  idCabinet!: any
  libDomaine: string = ""
  display: boolean = false;
  msg: string = ""
  isSending: boolean = false;
  constructor(
    private location: Location, 
    private route: ActivatedRoute,
    private req: ReqService,
    private modalService: NgbModal,
    private msgService: MessageService
    ) { }

  ngOnInit(): void {
    this.minDate = new Date()
    this.idCabinet = this.route.snapshot.paramMap.get('id')
    this.getDetailCabinet(this.idCabinet)
    this.findDomaine(this.idCabinet)
  }

  
  demandeForm = new FormGroup({
      date: new FormControl(""),
      horaire: new FormControl(""),
      cabinet: new FormControl(""),
      domaine: new FormControl("")
  });
  
  filterDomaines(event: { query: any; }) {
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.domaines.length; i++) {
        let dom = this.domaines[i];
        if (dom.libelle.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(dom);
        }
    }
    this.filteredDomaines = filtered;
  }

  findDomaine(id:any){
    this.subDom = this.req.getDomainesOfCabinet(id).subscribe(
      resp => {
        this.domaines = resp.data
        console.log(this.domaines)
      }
    )
  }
  

  closeDemande(element2: any): void{
    element2.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    setTimeout(() => {
      this.isView = false
    }, 300);
    //this.isView = false

  }

  back(): void {
    this.location.back()
  }

  getDetailCabinet(id: any){
    this.firstSub = this.req.detailCabinet(id).subscribe(
      resp => {
        this.cabinets = resp
        console.log(this.cabinets)
      }
    )
  }

  openDemande(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  onSelectDomaine(event: any, cle: boolean){
    this.libDomaine = cle== false ? event.id : ""
  }

  onSelectDate(datebI: any){
    //console.log(datebI.value)
  }

  onSubmit(champDate: any, champHour: any){
    
    this.isSending = true
    this.demandeForm.patchValue({
      domaine: this.libDomaine,
      date: champDate.value,
      horaire: champHour.value,
      cabinet: this.idCabinet
    })
    const val = this.demandeForm.value
    this.subRv = this.req.sendRv(val).subscribe(
      resp => {
        this.isSending = false
        if(resp.code == 201){
          this.msg = resp.message
          this.isSending = false
          this.modalService.dismissAll()
          this.showDialog()
        }else{
          
          this.msgService.add({severity:'error', summary: 'Oups!', detail: resp.message});
        }
      },
      err => {
        this.isSending = false
        this.modalService.dismissAll()
        this.msgService.add({severity:'error', summary: 'Oups!', detail: "Une erreur est survenue!"});
      }
    )
  }

  showDialog() {
    this.display = true;
}
  ngOnDestroy(): void {
    if(this.firstSub){
      this.firstSub.unsubscribe()
    }

    if(this.subDom){
      this.subDom.unsubscribe()
    }

    if(this.subRv){
      this.subRv.unsubscribe()
    }
  }

}
