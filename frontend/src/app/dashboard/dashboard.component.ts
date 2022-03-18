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

  searchDataForm = new FormGroup({
    search: new FormControl()
  });

  name = new FormControl();
  email = new FormControl();
  street = new FormControl();
  city = new FormControl();
  zip = new FormControl();

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
          alert(error.message);
        }
      );
  }

  editUser(_id: any) {
    alert(this.name.value)
    if (this.name.value && this.email.value && this.city.value && this.street.value && this.zip.value)
      this.apiService.editUser({
        _id,
        name: this.name.value,
        email: this.email.value,
        city: this.city.value,
        street: this.street.value,
        zip: this.zip.value
      })
        .subscribe(
          data => { },
          error => {
            alert(error.message);
          }
        );
      else
        alert("Sorry! The form may not update the user!");
  }

  deleteUser(_id: any) {
    this.apiService.deleteUser({ _id })
      .subscribe(
        data => { },
        error => {
          alert(error.message);
        }
      );
  }

}