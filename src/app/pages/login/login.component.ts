import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
import { TokenService } from 'src/app/services/token.service';
import { ReqService } from 'src/app/services/req.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  decoded: any
  constructor(
    private authService: AuthService,
    private msg: MessageService,
    private ngxService: NgxUiLoaderService,
    private tokenService: TokenService,
    private req: ReqService,
    private router: Router
    ) { }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  ngOnInit(): void {
   
  }


  onSubmit(){
    if(this.loginForm.valid){
      this.ngxService.start();
      const val = this.loginForm.value
      this.authService.connect(val).subscribe(
        response => {
          this.ngxService.stop();
          this.msg.add({severity:'success', summary: 'Success!', detail: "Connexion réussi."});
          this.tokenService.saveToken(response.token)
          this.decoded = jwt_decode(response.token)
          this.req.infoUser().subscribe(
            resp => {
              
              localStorage.setItem("prenom", resp.data.prenom)
              localStorage.setItem("nom", resp.data.nom)
              localStorage.setItem("photo", resp.data.photo)
              localStorage.setItem("id", resp.data.id)
              localStorage.setItem("age", resp.data.age)
              localStorage.setItem("email", resp.data.email)
              localStorage.setItem("genre", resp.data.genre)
              localStorage.setItem("telephone", resp.data.telephone)
              console.log(this.decoded.roles[0])
              var role = this.decoded.roles[0]
              switch(role) {
                case "ROLE_PATIENT":
                  this.router.navigate(['acceuil'])
                  break;
                case "ROLE_ADMIN":
                  this.router.navigate(['acceuil'])
                  break;
                case "ROLE_MEDECIN":
                  this.router.navigate(['medecin/acceuil'])
                  break;
              }
            }
          )
          
          
          
        },
        err => {
          this.ngxService.stop();
          this.msg.add({severity:'error', summary: 'Oups!', detail: "Login ou mot de passe incorrect."});
        }
      )
    }
  }
}
