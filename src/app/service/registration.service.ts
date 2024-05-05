import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Programregistration } from '../model/programregistration';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Studentdata } from '../interface/studentdata';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseURL = "http://localhost:9090/gm/v1/";
  constructor(private HttpClent:HttpClient) { }

 

  reistrationform(programregistration:Programregistration):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // You can add other headers here if needed
      }),
      responseType: 'text' as 'json',
    };
    return this.HttpClent.post(this.baseURL+'program_registration', programregistration, httpOptions)

  }

  // viewsubmissions(): Observable<Studentdata> {
  //   return this.HttpClent.get<Studentdata>(this.baseURL+'getAllCourses');
  // }
  viewsubmissions(): Observable<any> {
    return this.HttpClent.get(this.baseURL+'getAllCourses')
      .pipe(
        tap(data => console.log('Data from API:', data)),
        catchError(error => {
          console.error('Error fetching submissions:', error);
          return throwError(error);
        })
      );
  }

}
