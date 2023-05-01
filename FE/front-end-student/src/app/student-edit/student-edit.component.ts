import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Student} from "../model/Student";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student : Student;

  reactiveForm : FormGroup;

  constructor(private studentService : StudentService, private route : Router, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = next.get('id');
      this.studentService.findById(parseInt(id)).subscribe(next => {
        this.student = next;
        // console.log(next)
        this.reactiveForm = new FormGroup({
          id : new FormControl(this.student.id),
          name : new FormControl(this.student.name),
          nameGroup : new FormControl(this.student.nameGroup),
          nameSubject : new FormControl(this.student.nameSubject),
          email : new FormControl(this.student.email),
          teacher : new FormControl(this.student.teacher),
          phoneNumber : new FormControl(this.student.phoneNumber)
        })
      })
    })

  }


  ngOnInit(): void {
  }

  update(){
    if(this.reactiveForm.valid){
      this.studentService.update(this.student.id,this.reactiveForm.value).subscribe(next =>{
        this.route.navigateByUrl("/student");
      })
    }
  }
}
