import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {

  constructor(private service: BlogService, private route: ActivatedRoute) { }
  data;

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.data = await this.service.getById(id);

  }


}
