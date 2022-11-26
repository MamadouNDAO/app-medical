import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar-md',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarMdComponent implements OnInit {
  prenom: string = ''
  nom: string = ''
  photo: string = ''
  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.prenom = localStorage.getItem("prenom") ?? ''
    this.nom = localStorage.getItem("nom") ?? ''
    this.photo = localStorage.getItem("photo") ?? ''
  }

  deconnect(){
    this.tokenService.removeToken()
    this.router.navigate(['login'])
  }

}
