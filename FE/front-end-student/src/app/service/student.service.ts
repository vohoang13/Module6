import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/student';

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  create(student : Student) : Observable<any>{
    return this.httpClient.post(this.baseUrl + '/create', student);
  }

  // findById(id : number) : Observable<Student>{
  //   return this.httpClient.get<Student>(this.baseUrl + "/" + id);
  // }

  // delete(id : number) : Observable<any>{
  //   return this.httpClient.delete(this.baseUrl + '/' + id);
  // }
}
