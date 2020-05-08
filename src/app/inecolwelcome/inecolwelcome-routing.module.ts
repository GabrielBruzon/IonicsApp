import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InecolwelcomePage } from './inecolwelcome.page';

const routes: Routes = [
  {
    path: '',
    component: InecolwelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InecolwelcomePageRoutingModule {}
