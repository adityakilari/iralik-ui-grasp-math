export interface Registerdstdent {

    parentname:string; 
    email:string;
    phone:string;
    studentname:string;
    grade :string;
    needs:string;
    schoolname:string;
    coursenumber:string;
    duration:number;
}


// Define the interface for the duration entry
interface ClassDuration {
    duration: number;
    students: Registerdstdent[];
  }
  
  // Define the interfa ce for the course entry
  interface CourseName {
    course: string;
    durations: ClassDuration[];
  }
  
  // Define the top-level data response interface
  interface DataResponse {
    [key: string]: CourseName;
  }
  