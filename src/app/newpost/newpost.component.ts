import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../blog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  constructor(private service: BlogService, private snackBar: MatSnackBar) { }
  profileForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    summary: new FormControl(''),
    detail: new FormControl(''),
  });
  ngOnInit(): void {
  }
  openSnackBar(){
    this.snackBar.open('Post Ssuccess','End now',{
      duration:5000
    })
  }

  async onSubmit(){
    console.warn(this.profileForm.value);
    await this.service.create(this.profileForm.value);
    this.profileForm.reset();
    this.openSnackBar();


  }

}
