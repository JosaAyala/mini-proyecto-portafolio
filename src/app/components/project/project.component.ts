import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() projectName: string = '';
  @Input() imageUrl: string = '';
  @Input() projectDetails: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
