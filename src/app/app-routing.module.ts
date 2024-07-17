import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';
import { NameSortingComponent } from './name-sorting/name-sorting.component';
import { AppComponent } from './app.component';
import { ThumbsDemoComponent } from './thumbs-demo/thumbs-demo.component';

const routes: Routes = [
  {
    path:"",
    component:AppComponent
  },
  {
    path:"arithmetic",
    component:ArithmeticComponent
  },
  {
    path:"namesorting",
    component:NameSortingComponent
  },
  {
    path:"thumbsdemo",
    component:ThumbsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
