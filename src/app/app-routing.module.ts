import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'search-view'},
  {path: 'search-view', loadChildren:()=>import('./modules/search-view/search-view.module').then(m => m.SearchViewModule) },
];
///ANNA FOR PRESIDENT
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
