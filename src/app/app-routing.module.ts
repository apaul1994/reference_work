import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  {path:'graph', component:GraphComponent},
  {path:'dynamicForm', component:DynamicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
