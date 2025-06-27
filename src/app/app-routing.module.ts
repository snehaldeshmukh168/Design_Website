import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaviationBarComponent } from './naviation-bar/naviation-bar.component';

const routes: Routes = [
   { path: '', component: NaviationBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
