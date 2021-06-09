import { Component } from '@angular/core';
import { postsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']

})
export class AppComponent {
  title = 'FrontAngular';  
  empty: any = {};


  constructor(private postsService: postsService){}

  cleanPost() { 
    this.postsService.emitPostEvent(this.empty)
  }

}
