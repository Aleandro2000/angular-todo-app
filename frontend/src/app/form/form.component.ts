import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  users: any;

  userDataForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    zip: new FormControl()
  });

  taskDataForm = new FormGroup({
    _userId: new FormControl(),
    title: new FormControl()
  });

  postDataForm = new FormGroup({
    _userId: new FormControl(),
    title: new FormControl(),
    text: new FormControl()
  });

  ngOnInit(): void {
    this.getAllUsers();
  }

  onUserSubmit() {
    this.apiService.createUser(this.userDataForm.value)
      .subscribe(
        data => {
          this.router.navigate(["/"]);
        },
        error => {
          alert(error.message);
        }
      );
  }

  onTaskSubmit() {
    this.apiService.createTask(this.taskDataForm.value)
      .subscribe(
        data => {
          this.router.navigate(["/"]);
        },
        error => {
          alert(error.message);
        }
      );
  }

  getAllUsers() {
    this.apiService.getAllUsers()
      .subscribe(
        (data: any) => {
          this.users = data.result;
        },
        error => {
          alert(error.message);
        }
      );
  }

}
