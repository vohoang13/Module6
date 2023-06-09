import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../model/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student: Student[] = [];

  page: number = 0;

  // p : number;

  // students : Student;

  constructor(private studentService: StudentService, private route: Router, private activatedRoute: ActivatedRoute) {
    this.studentService.getAll(this.page).subscribe(next => {
      this.student = next.content;
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.studentService.delete(parseInt(id)).subscribe(next => {
          this.route.navigateByUrl('student');
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
