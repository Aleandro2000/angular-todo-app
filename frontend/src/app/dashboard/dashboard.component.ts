import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  show = false;
  users: any;
  message: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
      this.getAllUsers();
  }

  showMore(): void {
    this.show = !this.show;
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

}
