import { Injectable } from '@angular/core';
import { rutaAPI } from '../../config/config';
import { StorageService } from "../services/storage.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})

export class postsService {

  url: string;
  token: string | null;
  httpOptions: any;
  data: any = {};

  private post = new BehaviorSubject<Post>(this.data);
  

  constructor(private http: HttpClient, private storageService: StorageService) {

    this.url = `${rutaAPI}/posts`;


  }

  obtainToken(){

    this.token = this.storageService.getCurrentToken();
    console.log('Este es el token:', this.token);
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    }

  }

  emitPostEvent(post: Post) {
    this.post.next(post)
  }

  postEventListener() {
    return this.post.asObservable();
  }

  getAllPosts(): Promise<any> {    

    return this.http.get<any>(this.url).toPromise();

  }

  getPostbyId(id: number): Promise<any> {
    this.obtainToken();
    return this.http.get<any>(`${this.url}/${id}`, this.httpOptions).toPromise();

  }

  getPostbyUser(userId: any): Promise<any> {
    this.obtainToken();
    return this.http.get<any>(`${this.url}/?userId=${ userId }`, this.httpOptions).toPromise();

  }

  create(response: any): Promise<any> {    
    this.obtainToken();
    return this.http.post<any>(this.url, response, this.httpOptions).toPromise();

  }

  update(id: number, response: any): Promise<any> {
    this.obtainToken();
    return this.http.put<any>(`${this.url}/${id}`, response, this.httpOptions).toPromise();

  }

  delete(id: number): Promise<any> {
    this.obtainToken();
    return this.http.delete<any>(`${this.url}/${id}`,this.httpOptions).toPromise();

  }
 
}
