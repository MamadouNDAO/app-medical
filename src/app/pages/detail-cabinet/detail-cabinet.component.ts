import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';

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
  constructor() { }

  ngOnInit(): void {
    this.minDate = new Date()
  }

  openDemande(element: any): void{
    this.isView = true
    setTimeout(() => {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 400)
    
  }

  closeDemande(element2: any): void{
    element2.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    setTimeout(() => {
      this.isView = false
    }, 300);
    //this.isView = false

  }


}
