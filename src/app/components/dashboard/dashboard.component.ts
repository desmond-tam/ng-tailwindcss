import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, CardComponent]
})
export class DashboardComponent implements OnInit {
  isOpen:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
