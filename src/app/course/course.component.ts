import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CourseService]
  
})
export class CourseComponent implements OnInit {
  courses: string[];

  // Dependency Injection
  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.coursesList();
  }
}