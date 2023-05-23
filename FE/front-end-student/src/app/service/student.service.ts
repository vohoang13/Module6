import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/student';

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '?page=' + page);
  }

  create(student: Student): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/create', student);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.baseUrl + '/findById/' + id);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/delete/' + id);
  }

  update(id: number, student: Student): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/update/' + id, student);
  }
}
