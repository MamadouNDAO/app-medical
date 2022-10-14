import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  ngOnInit(): void {
   
  }


  onSubmit(){
    const val = this.loginForm.value
    console.log(val)
    this.authService.connect(val).subscribe(
      response => {
        console.log(response.token)
      }
    )
  }
}
