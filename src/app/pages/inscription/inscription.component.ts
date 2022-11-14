import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import { ReqService } from 'src/app/services/req.service';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  urlImage: string = "../../../assets/images/avatar.png";
  inscriptForm!: FormGroup
  passwordConformed: boolean = true

  get nom() {
    return this.inscriptForm.get('nom');
  }

  get prenom() {
    return this.inscriptForm.get('prenom');
  }

  get password() {
    return this.inscriptForm.get('password');
  }

  get email() {
    return this.inscriptForm.get('email');
  }

  get telephone() {
    return this.inscriptForm.get('telephone');
  }

  get dateNaissance() {
    return this.inscriptForm.get('dateNaissance');
  }

  errorMessages = {
    prenom: undefined,
    nom: undefined,

  };
  constructor(
    private fb: FormBuilder,
    private msg: MessageService,
    private req: ReqService,
    private ngxService: NgxUiLoaderService
    ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.inscriptForm = this.fb.group({
      prenom: ["", Validators.required],
      nom: ["", Validators.required],
      email: ["", Validators.required],
      telephone: ["", Validators.required],
      password: ["", Validators.required],
      dateNaissance: ["", Validators.required],
      adresse: ["", Validators.required],
      photo: [""],
      genre: ["", Validators.required]
    })
  }

  getImageFile(event: any){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any)=>{
        this.urlImage = event.target.result;
      }
      const file = event.target!.files[0]!;
      this.inscriptForm.controls['photo'].setValue(file);
    }
    console.log(this.urlImage)
  }

  onSubmit(){
    if(this.inscriptForm.valid){
      this.ngxService.start();
      const formData = new FormData();
      formData.append('prenom', this.inscriptForm.controls['prenom'].value);
      formData.append('nom', this.inscriptForm.controls['nom'].value);
      formData.append('email', this.inscriptForm.controls['email'].value);
      formData.append('telephone', this.inscriptForm.controls['telephone'].value);
      formData.append('password', this.inscriptForm.controls['password'].value);
      formData.append('dateNaissance', this.inscriptForm.controls['dateNaissance'].value);
      formData.append('genre', this.inscriptForm.controls['genre'].value);
      formData.append('adresse', this.inscriptForm.controls['adresse'].value);
      formData.append('photo', this.inscriptForm.controls['photo'].value);
      formData.append('profil', 'PATIENT');

      this.req.inscription(formData).subscribe(
        resp => {
          this.ngxService.stop();
          console.log(resp)
          this.inscriptForm.reset()
          this.msg.add({severity:'success', summary: 'Success!', detail: "Inscription fait avec succès."});
        },
        err => {
          this.ngxService.stop();
          console.log(err.error.violations[0].message)
          const info = err.error.violations[0].message
          this.msg.add({severity:'error', summary: 'Inscription rejetée!', detail: info});
        }
      )
    }
  }

  verifPass(fielPass: any){
    var pass = this.password
    if(fielPass.value == pass?.value){
      this.passwordConformed = true
    }else{
      this.passwordConformed = false
    }
  }



}
