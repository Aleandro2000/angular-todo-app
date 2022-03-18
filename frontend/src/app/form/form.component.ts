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

  dataForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    zip: new FormControl()
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.apiService.createUser(this.dataForm.value);
  }

}
