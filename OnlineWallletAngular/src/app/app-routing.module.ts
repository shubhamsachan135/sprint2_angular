import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'withdraw',component:WithdrawComponent},
 // {path:'dashboard/:accountBalance',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: '', redirectTo: '/dashboard' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
