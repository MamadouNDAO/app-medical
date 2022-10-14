import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AutoComplete} from 'primeng/autocomplete';

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

  regions: any[] = [
    {name: "Dakar"}, 
    {name: "Thies"}, 
    {name: "Saint-Louis"}
  ]
  departements: any[] = [
    {name: "Dakar"}, 
    {name: "Guediawaye"}, 
    {name: "Pikine"},
    {name: "Rufisque"}
  ]

  domaines: any[] = [
    {name: "Médecine générale"}, 
    {name: "Ophtalmologie"}, 
    {name: "Dentaire"},
    {name: "cardiologie"},
    {name: "Pédiatrie"},
    {name: "Maternité"}
  ]

  cabinets: any[] = [
    {name: "Clinique Raby"}, 
    {name: "Croix Bleu"}, 
    {name: "Dentaire"},
    {name: "cardiologie"},
    {name: "Pédiatrie"},
    {name: "Maternité"}
  ]
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  filterRegions(event: { query: any; }) {
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.regions.length; i++) {
        let reg = this.regions[i];
        if (reg.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
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
      if (dep.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
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
      if (dom.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
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
      if (cab.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(cab);
      }
  }
  this.filteredCabinets = filtered;
}
}
