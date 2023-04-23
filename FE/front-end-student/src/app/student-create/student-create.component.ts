import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  reactiveForm : FormGroup;

  constructor(private studentService : StudentService, private activatedRoute : ActivatedRoute, private route : Router) {
    this.reactiveForm = new FormGroup({
      id : new FormControl(),
      name : new FormControl(),
      nameGroup : new FormControl(),
      nameSubject : new FormControl(),
      email : new FormControl(),
      teacher : new FormControl(),
      phoneNumber : new FormControl()
    })
  }

  ngOnInit(): void {
  }

  addNew(){
    if(this.reactiveForm.valid){
      this.studentService.create(this.reactiveForm.value).subscribe(next =>{
          this.route.navigateByUrl("/student");
      })
    }
  }
}
