import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private apiService: ApiService
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
        data => { },
        error => {
          alert(error.message);
        }
      );
  }

  onTaskSubmit() {
    this.apiService.createTask(this.taskDataForm.value)
      .subscribe(
        data => { },
        error => {
          alert(error.message);
        }
      );
  }

  getAllUsers() {
    this.apiService.getAllUsers()
      .subscribe(
        data => {
          this.users = data;
        },
        error => {
          alert(error.message);
        }
      );
  }

}
