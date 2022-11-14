import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AutoComplete} from 'primeng/autocomplete';
import { ReqService } from 'src/app/services/req.service';
import { Subscription } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
[x: string]: any;
  closeResult!: string;
  selectedRegions: any[] = [];
  filteredRegions: any[] = [];
  selectedDepartements: any[] = [];
  filteredDepartements: any[] = [];
  selectedDomaines: any[] = [];
  filteredDomaines: any[] = [];
  selectedCabinets: any[] = [];
  filteredCabinets: any[] = [];

  regions: any
  departements: any = []

  domaines: any[] = []

  cabinets: any[] = []

  listCabinets = [];
  page: number = 1;
  row: number = 0;
  infoMessage = ""
  isEmpty: boolean = false

  libRegion = ""
  libDep = ""
  libDomaine = ""
  libCabinet = ""

  subsRegion: Subscription = new Subscription;
  subsDep: Subscription = new Subscription;
  subsCab: Subscription = new Subscription;
  subDom: Subscription = new Subscription;
  constructor(private modalService: NgbModal, private req: ReqService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.getCabinet(this.page, this.libRegion, this.libDep, this.libDomaine, this.libCabinet)
    this.findRegions()
    this.findCabinets("")
    this.findDomaine()
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  filterRegions(event: { query: any; }) {
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.regions.length; i++) {
        let reg = this.regions[i];
        if (reg.libelle.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(reg);
        }
    }
    this.filteredRegions = filtered;
}

filterDepartements(event: { query: any; }) {
  let filtered : any[] = [];
  let query = event.query;
  for(let i = 0; i < this.departements.length; i++) {
      let dep = this.departements[i];
      if (dep.libelle.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(dep);
      }
  }
  this.filteredDepartements = filtered;
}

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

filterCabinets(event: { query: any; }) {
  let filtered : any[] = [];
  let query = event.query;
  for(let i = 0; i < this.cabinets.length; i++) {
      let cab = this.cabinets[i];
      if (cab.nom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(cab);
      }
  }
  this.filteredCabinets = filtered;
}

  getCabinet(numPage: number,Region:string, Dep: string, Domaine: string, Cabinet: string){
    this.ngxService.start();
    this.req.listCabinet(numPage, Region, Dep, Domaine, Cabinet).subscribe(
      resp => {
        this.ngxService.stop();
        if(resp.code == 200){
          this.isEmpty = false
          this.listCabinets = resp.data
          this.row = resp.total
        }else if(resp.code == 204){
          this.isEmpty = true
          this.infoMessage = resp.message
          this.listCabinets = []
        }
        
      }
    )
  }

  paginate(event: any){
    this.page = event.page+1
    this.getCabinet(this.page, this.libRegion, this.libDep, this.libDomaine, this.libCabinet)
  }

  findRegions() {
    this.subsRegion = this.req.getRegions().subscribe(
      resp => {
        this.regions = resp
      }
    )
  }

  findDepartement(event: any, cle: boolean){
    this.departements = cle == false ? event.departements : []
    this.libRegion = cle== false ? event.id : ""
  }

  findCabinets(dep: any){
    this.subsCab = this.req.comboCabinet(dep).subscribe(
      resp => {
        console.log(resp)
        this.cabinets = resp
      }
    )
  }

  findDomaine(){
    this.subDom = this.req.getDomainesMedicals().subscribe(
      resp => {
        this.domaines = resp
      }
    )
  }

  onSelectDepartement(event: any, cle: boolean){
    this.libDep = cle== false ? event.id : ""
  }

  onSelectDomaine(event: any, cle: boolean){
    this.libDomaine = cle== false ? event.id : ""
  }

  onSelectCabinet(event: any, cle: boolean) {
    this.libCabinet = cle== false ? event.id : ""
  }

  goFiltre(){
    this.getCabinet(1, this.libRegion, this.libDep, this.libDomaine, this.libCabinet)
  }

  check(event: any){
    
  }

  ngOnDestroy(): void {
    if(this.subsRegion){
      this.subsRegion.unsubscribe()
    }

    if(this.subsDep){
      this.subsDep.unsubscribe()
    }

    if(this.subsCab){
      this.subsCab.unsubscribe()
    }

    if(this.subDom){
      this.subDom.unsubscribe()
    }
  }
}
