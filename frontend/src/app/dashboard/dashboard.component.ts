import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from "../service/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ApiService]
})
export class DashboardComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  users: any;
  showList: any;

  searchDataForm = new FormGroup({
    search: new FormControl()
  });

  ngOnInit(): void {
    this.getAllUsers();
  }

  showMore(id: string) {
    if (typeof this.showList === "undefined")
      this.showList = [];
    if (!this.showList.includes(id))
      this.showList.push(id);
    else
      this.showList = this.showList.filter((item: string) => item !== id);
  }

  onSubmit() {
    this.searchDataForm.value.search ? this.users = this.users.filter((element: any) => element.email.trim().toLowerCase().includes(this.searchDataForm.value.search.trim().toLowerCase())) : this.getAllUsers();
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

  editUser(id: any) {
    sessionStorage.setItem("id", id);
    this.router.navigate(["/edit"]);
  }

  deleteUser(_id: any) {
    this.apiService.deleteUser({ _id: _id })
      .subscribe(
        data => {
          this.getAllUsers();
        },
        error => {
          alert(error.message);
        }
      );
  }

  goToPosts(id: any) {
    sessionStorage.setItem("id", id);
    this.router.navigate(["/posts"]);
  }

}