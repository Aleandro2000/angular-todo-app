import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private roter: Router
  ) { }

  tasks: any;

  ngOnInit(): void {
    !sessionStorage.getItem("id") ? this.roter.navigate(["/"]) : this.getAllTasks();
  }

  getAllTasks() {
    this.apiService.getAllTasks({ id: sessionStorage.getItem("id") })
      .subscribe(
        (data: any) => {
          this.tasks = data.result;
        },
        error => {
          alert(error.message);
        }
      );
  }

  markAsDone(id: any) {
    this.apiService.markTask({ id })
      .subscribe(
        (data: any) => {
          alert(data.message)
          this.getAllTasks();
        },
        error => {
          alert(error.message);
        }
      );
  }

}