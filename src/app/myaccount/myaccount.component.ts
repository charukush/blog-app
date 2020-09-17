import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post} from '../model/post';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  constructor(private service: BlogService) { }
  public bloglist: Post[] = [];
  

 
  async ngOnInit(){
   this.bloglist = await this.service.getAll();
   
  }

}
