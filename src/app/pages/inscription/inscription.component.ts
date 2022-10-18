import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  urlImage: string = "../../../assets/images/avatar.png";
  constructor() { }

  ngOnInit(): void {
  }

  getImageFile(event: any){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any)=>{
        this.urlImage = event.target.result;
      }
    }
    console.log(this.urlImage)
  }

}
