import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';
import { NameSortingComponent } from './name-sorting/name-sorting.component';
import { ThumbsDemoComponent } from './thumbs-demo/thumbs-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArithmeticComponent,
    NameSortingComponent,
    ThumbsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
