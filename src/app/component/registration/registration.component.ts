import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICourse } from 'src/app/interface/course.interface';
import { Programregistration } from 'src/app/model/programregistration';
import { RegistrationService } from 'src/app/service/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  
programregistration: Programregistration = new Programregistration();

  public courses:Array<ICourse> = [{id:1,name:'AP Calculus - AB'},
  {id:2,name:'AP Calculus - BC'},
  {id:3,name:'AP PreCalculus'},
  {id:4,name:'Algebra'},
  {id:4,name:'Gemetry'}
];

public courseid!:number;
public courseName!:string;
public classduration!:number;
public specificneeds!:string;

message! : string;
showContainer: boolean = true;

registrationForm!: FormGroup;

constructor(private RegistrationService : RegistrationService , private registrationfomBuilder: FormBuilder){

  this.registrationForm = registrationfomBuilder.group({
    parentname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    studentname: ['', Validators.required],
    schoolname: ['', Validators.required],
    grade: ['', Validators.required],
    course: ['', Validators.required],
    duration: ['', Validators.required],
    needs:[]
  });


}

  ngOnInit(): void {
  
  }

  get parentname():FormControl {
    return this.registrationForm.get('parentname') as FormControl;
  }
  get email():FormControl {
    return this.registrationForm.get('email') as FormControl;
  }
  get phone():FormControl {
    return this.registrationForm.get('phone') as FormControl;
  }
  get studentname():FormControl {
    return this.registrationForm.get('studentname') as FormControl;
  }
  get schoolname():FormControl {
    return this.registrationForm.get('schoolname') as FormControl;
  }
  get grade():FormControl {
    return this.registrationForm.get('grade') as FormControl;
  }
  get course():FormControl {
    return this.registrationForm.get('course') as FormControl;
  }
  get duration():FormControl {
    return this.registrationForm.get('duration') as FormControl;
  }


  newregistration(){
    
    this.programregistration.courseid = this.courseid;
    this.programregistration.duration = this.classduration;
    this.programregistration.needs = this.specificneeds;
    
    this.RegistrationService.reistrationform(this.programregistration)
      .subscribe(data=>{
        console.log(data);
        this.registrationResponse(data);
      },
      error=> console.log(error)
      );
      
  }

  submitregistration(){
    this.newregistration();
  }

  registrationResponse(responsemessage:string){
    if(responsemessage != "Submitted successfully"){
      alert(responsemessage);
    }else{
      this.showContainer = false;
      this.message = responsemessage;
    }
  }
}
