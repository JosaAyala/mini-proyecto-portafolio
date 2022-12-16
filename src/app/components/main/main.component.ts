import { Component, OnInit } from '@angular/core';
import { proyectos } from './../../../assets/datos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  projects: any[] = [];
  constructor() {
    this.projects = proyectos;
  }

  ngOnInit(): void {}
}
