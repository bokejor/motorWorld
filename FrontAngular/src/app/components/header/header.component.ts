import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { StorageService } from "../../services/storage.service";


import { AuthorizatedGuard } from '../../services/authorizated.guard';
import { postsService } from '../../services/posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  contentMenu: Array<any>;
  contentSubmenu: Array<any>; 

  isAuth: boolean;
  @Output() clickButtonPublicar: EventEmitter<any>

  constructor(private storageService: StorageService, private postsService: postsService, private auth: AuthorizatedGuard) {

    this.contentMenu = [
      { path: "/home", name: "HOME" },
      { path: "/motos", name: "MOTOS" },
      { path: "/coches", name: "COCHES" },
      { path: "/comparador", name: "COMPARADOR" },
      { path: "/marcas", name: "MARCAS" }

    ];

    this.contentSubmenu = [
      { path: "/favoritos", name: "Mis Favoritos" },
      { path: "/anuncios", name: "Mis Anuncios" },

    ];

    this.storageService.isAuth.subscribe(value => {
      this.isAuth = value;
    });

     this.clickButtonPublicar = new EventEmitter();    
   
    
    

  }

  ngOnInit(): void {   
    
    

  }

  onClickPublicar() {    
    this.clickButtonPublicar.emit();
  }

  onNavClick() { }

  cleanPost() { }

  logout(): void {
   this.storageService.isAuth.next(false);
   this.storageService.logout();  
    
  }

}
