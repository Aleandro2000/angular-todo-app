import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  show = false;

  ngOnInit(): void {
      this.show = false;
  }

  showMore(): void {
    this.show = !this.show;
  }

}
