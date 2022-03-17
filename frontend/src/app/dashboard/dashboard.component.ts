import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ApiService]
})
export class DashboardComponent implements OnInit {

  users: any;
  message = "";
  search = "";

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiService.getAllUsers()
      .subscribe(
        data => {
          this.users = data;
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