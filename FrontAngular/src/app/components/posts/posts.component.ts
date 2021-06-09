import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Post } from '../../models/post.model';
import { Router } from '@angular/router';
import { postsService } from '../../services/posts.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  @Input() posts: Post[]; 
  @Output() updatePosts: EventEmitter<any>;
  route: string;
  
  

  constructor(private router: Router, private postsService: postsService) {    
    this.route = router.url;
    this.updatePosts = new EventEmitter();
    
  }

  async deletePost(post: any){   

    try {
      const data = await this.postsService.delete(post.id);  
      if (data) {
        Swal.fire({
        icon: "success",
        title: "OK...",
        text:"Se ha borrado correctamente",
        showConfirmButton: true,
        confirmButtonText: "Cerrar"

      })}
          
      this.updatePosts.emit(post);
    

       
      
    } catch (e) {
      console.log(e)
    } 

  }

  async editPost(post: any){

    try {
      const data = await this.postsService.getPostbyId(post.id);
      this.postsService.emitPostEvent(data);
      if (data) this.router.navigate(['/publish']);      
    } catch (e) {
      console.log(e)
    }

   
  }

  ngOnInit(): void {
  }

  updateFavorite() {

  }

}
