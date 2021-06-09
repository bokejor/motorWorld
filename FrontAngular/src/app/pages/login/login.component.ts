import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { StorageService } from "../../services/storage.service";
import { Router } from "@angular/router";
import { Session } from "../../models/session.model";
import { Banners } from 'src/app/models/banners.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  // public submitted: Boolean = false;  
  // public error: { code: number, message: string } = null;
  banner: Banners;

  constructor(private fb: FormBuilder, 
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router) {
    this.banner = {
      image: ['../../../../assets/img/login1.jpg', '../../../../assets/img/login2.jpg'],
      title: 'ENTRA EN MOTOR WORLD',
      subtitleOption: false,
      subtitle: 'Texto de Prueba',
      button: false
   }
   }

  async submitForm() {

    // this.submitted = true;
    // this.error = null;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    try{
      const data = await this.authenticationService.create(this.validateForm.value);
      this.correctLogin(data);
      

    }catch(e){
      console.log(e)
    }
  }

    private correctLogin(data: Session) {
      this.storageService.setCurrentSession(data);     
      this.storageService.isAuth.next(true);
      this.router.navigate(['/home']);     
      
    }

  

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
