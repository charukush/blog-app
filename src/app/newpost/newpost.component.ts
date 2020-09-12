import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  constructor(private service: BlogService) { }
  profileForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    summary: new FormControl(''),
    detail: new FormControl(''),
  });
  ngOnInit(): void {
  }
  async onSubmit(){
    console.warn(this.profileForm.value);
    await this.service.create(this.profileForm.value);
    this.profileForm.reset();

  }

}
