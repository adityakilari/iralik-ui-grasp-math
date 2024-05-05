import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';

import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit{
  studentList: any;
 
  

constructor(private submissions : RegistrationService){

}


  ngOnInit(): void {
    // this.submissions.viewsubmissions()
    // .subscribe((res: any)=>{
    //   this.studentList=res;
    // },
    // (error:any)=>{
    //   console.error('error');
    // }
    // );

    // console.log(this.studentList)

this.submissions.viewsubmissions()
    .pipe(
      catchError(error => {
        console.error('Error fetching submissions:', error);
        return [];
      })
    )
    .subscribe((res: any) => {
      this.studentList = res;
      console.log(this.studentList)
    });

    
    


    //throw new Error('Method not implemented.');
  }

}
