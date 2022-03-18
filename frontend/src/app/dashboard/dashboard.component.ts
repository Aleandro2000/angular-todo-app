import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ApiService]
})
export class DashboardComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }
  
  users: any;
  message = "";
  searchDataForm = new FormGroup({
    search: new FormControl()
  });

  ngOnInit(): void {
    this.getAllUsers();
  }

  onSubmit() {
      this.searchDataForm.value.search ? this.users = this.users.filter((element: any) => element.email.includes(this.searchDataForm.value.search)) : this.getAllUsers();
  }

  getAllUsers() {
    this.apiService.getAllUsers()
      .subscribe(
        (data: any) => {
          this.users = data.result;
        },
        error => {
          this.message = error;
        }
      );
  }

  editUser(data: any) {
    this.apiService.editUser(data)
      .subscribe(
        data => {},
        error => {
          this.message = error;
        }
      );
  }

  deleteUser(data: any) {
    this.apiService.deleteUser(data)
      .subscribe(
        data => {},
        error => {
          this.message = error;
        }
      );
  }

}