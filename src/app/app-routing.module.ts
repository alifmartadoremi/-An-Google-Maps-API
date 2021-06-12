import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './sub-menu/school/school.component';
import { OfficeComponent } from './sub-menu/office/office.component';
import { HomeComponent } from './sub-menu/home/home.component';

const routes: Routes = [
  { path : 'school-address', component: SchoolComponent},
  { path : 'office-address', component: OfficeComponent},
  { path : 'home-address', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SchoolComponent, OfficeComponent, HomeComponent]
