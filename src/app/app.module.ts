import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Feature1Component } from './feature1/feature1.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RxjsoperatorsComponent } from './rxjsoperators/rxjsoperators.component';
import { FacebookComponent } from './facebook/facebook.component'

@NgModule({
  declarations: [
    AppComponent,
    Feature1Component,
    ParentComponent,
    ChildComponent,
    RxjsoperatorsComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
