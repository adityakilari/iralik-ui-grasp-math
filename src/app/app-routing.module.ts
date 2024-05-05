import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { SubmissionsComponent } from './component/submissions/submissions.component';
import { HomeComponent } from './component/home/home.component';
import { DeveloperComponent } from './component/developer/developer.component';
import { CourseComponent } from './component/course/course.component';

const routes: Routes = [

  {path:'registration',component: RegistrationComponent},
  {path:'submissions',component: SubmissionsComponent},
  {path:'developer', component: DeveloperComponent},
  {path :'course', component: CourseComponent},
  {path:'home', component:HomeComponent},
  {path: '',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
