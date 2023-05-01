import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentCreateComponent} from "./student-create/student-create.component";
import {StudentEditComponent} from "./student-edit/student-edit.component";


const routes: Routes = [
  { path: 'student', component: StudentListComponent },
  {
    path : 'create', component : StudentCreateComponent
  },
  {
    path : 'delete/:id',
    component : StudentListComponent
  },
  {
    path : 'update/:id',
    component : StudentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
