import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "tasks",
    component: TasksComponent
  },
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "edit",
    component: EditComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
