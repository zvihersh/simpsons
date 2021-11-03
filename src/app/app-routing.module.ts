import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { UserSelectionComponent } from './user-selection/user-selection/user-selection.component';

const routes: Routes = [{
  path: 'comments/:id',
  component: CommentsComponent
}, {
  path: 'select-user',
  component: UserSelectionComponent
}, {
  path: '',
  redirectTo: 'select-user',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
