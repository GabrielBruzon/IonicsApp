import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InecolwelcomePageRoutingModule } from './inecolwelcome-routing.module';

import { InecolwelcomePage } from './inecolwelcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InecolwelcomePageRoutingModule
  ],
  declarations: [InecolwelcomePage]
})
export class InecolwelcomePageModule {}
