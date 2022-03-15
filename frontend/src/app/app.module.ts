import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TasksComponent,
    PostsComponent,
    NotFoundComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
