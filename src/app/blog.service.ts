import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from './model/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  async create(blog){
   return this.http.put("http://localhost:3000/dev/content",blog).toPromise();
  }
  // async getById(id: string):Promise<Post>{

  // }
   async getAll(): Promise<Post[]>{
     return this.http.request<Post[]>('GET',"http://localhost:3000/dev/content").toPromise();
   }
  
}
