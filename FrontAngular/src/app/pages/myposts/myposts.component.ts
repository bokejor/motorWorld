import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { postsService } from '../../services/posts.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.sass']
})
export class MypostsComponent implements OnInit {

  arrayPosts: Post[];
  @Input() post: Post[];

  constructor(private postsService: postsService, private storageService: StorageService) { 

    this.arrayPosts = [];
    

  }

  async ngOnInit() {

    const user = this.storageService.getCurrentUser();
    const userId = user?.firebaseId;

    const response = await this.postsService.getPostbyUser(userId);
    this.arrayPosts = response;


  }

  reload(post: any){

    const i = this.arrayPosts.indexOf(post);
    this.arrayPosts.splice(i, 1);

  }



}
