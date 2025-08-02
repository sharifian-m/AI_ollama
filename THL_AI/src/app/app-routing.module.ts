import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GptCommandComponent } from './pages/gpt-command/gpt-command.component';
import {VoucherComponent} from './pages/voucher/voucher.component';

const routes: Routes = [
  { path: '', redirectTo: 'gpt', pathMatch: 'full' },
  { path: 'gpt', component: GptCommandComponent },
  { path: 'voucher', component: VoucherComponent },
  { path: '**', redirectTo: 'gpt' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
