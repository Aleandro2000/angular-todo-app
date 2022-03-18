import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    !sessionStorage.getItem("id") ? this.router.navigate(["/"]) : null;
  }

  users: any;

  userDataForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    zip: new FormControl()
  });

  onUserSubmit() {
    this.apiService.editUser({...this.userDataForm.value, id: sessionStorage.getItem("id")})
      .subscribe(
        data => {
          this.router.navigate(["/"]);
        },
        error => {
          alert(error.message);
        }
      );
  }

}
