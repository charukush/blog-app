import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: BlogService) { }
  public blogList: Post[] = [];

  ngOnInit(): void {
    this.getList();
  }
  async getList(){
    var counter = 0;
    const allPosts = await this.service.getAll();
    for(var post of allPosts){
      counter++;
      if(counter>8) break;
      this.blogList.push(post);
    }
  }
 
}
