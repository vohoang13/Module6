import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentCreateComponent} from "./student-create/student-create.component";


const routes: Routes = [
  { path: 'student', component: StudentListComponent },
  {
    path : 'create', component : StudentCreateComponent
  },
  {
    path : 'delete/:id',
    component : StudentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
