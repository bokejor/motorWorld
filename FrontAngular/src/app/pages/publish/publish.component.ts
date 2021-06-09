import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { postsService } from '../../services/posts.service';
import { StorageService } from "../../services/storage.service";
import { Post } from '../../models/post.model';
import { Router } from "@angular/router";


@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.sass']
})
export class PublishComponent implements OnInit {

  validateForm!: FormGroup;
  empty: any = {};
  post: Post;
  edit: boolean = false;
  phone: string = '';
  phonePrefix: string = '+34';
  name : string = '';
  province : string = '';
  price : number = 0;
  email : string = '';
  km : string = '';
  brand : string = '';
  desc : string = '';


  constructor(private fb: FormBuilder,
    private postsService: postsService,
    private storageService: StorageService,
    private router: Router) {
   
    this.postsService.postEventListener().subscribe(data => {
      this.post = data;
    })

 
 
  }

  ngOnInit(): void {


    if (Object.keys(this.post).length !== 0) {

      this.edit = true;
      this.phone = this.post.phone.substr(3);
      this.phonePrefix = this.post.phone.substr(-24, 3);
      this.name = this.post.name;
      this.province = this.post.province;
      this.price = this.post.price;
      this.email = this.post.email;
      this.km = this.post.km;
      this.brand = this.post.brand;
      this.desc = this.post.desc;

    


    }

    this.validateForm = this.fb.group({
      name: [this.name, [Validators.required]],
      province: [this.province, [Validators.required]],
      phonePrefix: [this.phonePrefix],
      phone: [this.phone, [Validators.required]],
      email: [this.email, [Validators.email, Validators.required]],
      price: [this.price, [Validators.required]],
      km: [this.km, [Validators.required]],
      brand: [this.brand, [Validators.required]],
      desc: [this.desc]
    });
  
     

   
  }

  async submitForm(event: any) {

    console.log(event.submitter.id)

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {

      const { phonePrefix, phone, ...rest } = this.validateForm.value;
      const user = this.storageService.getCurrentUser();
      const userId = user?.firebaseId;
      const formData = {
        ...rest,
        phone: phonePrefix + phone,
        userId
      }

     

      if (event.submitter.id === "publicar") {

        try {
          const data = await this.postsService.create(formData);
          this.router.navigate(['/home']);

        } catch (e) {
          console.log(e)
        }

      } else if (event.submitter.id === "modificar") {

        try {

          const data = await this.postsService.update(this.post.id, formData);
          this.postsService.emitPostEvent(this.empty)
          this.router.navigate(['/home']);

        } catch (e) {
          console.log(e)
        }

      }

    }


  }



 
}
