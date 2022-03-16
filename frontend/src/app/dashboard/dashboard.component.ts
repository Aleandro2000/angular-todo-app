import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any;
  message = "";
  search = "";

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
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
      )
  }

  editUser(data: any) {

  }

  deleteUser(data: any) {

  }

}
