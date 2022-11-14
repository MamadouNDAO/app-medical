import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squelette',
  templateUrl: './squelette.component.html',
  styleUrls: ['./squelette.component.css']
})
export class SqueletteComponent implements OnInit {
  name: any
  email: any
  age: any
  genre: any
  tel: any
  urlImg: any
  constructor() { }

  ngOnInit(): void {
    this.urlImg = localStorage.getItem('photo')
    this.name = localStorage.getItem('prenom')+' '+localStorage.getItem('nom')
    this.email = localStorage.getItem('email')
    this.age = localStorage.getItem('age')
    this.tel = localStorage.getItem('telephone')
    this.genre = localStorage.getItem('genre')
  }

}
