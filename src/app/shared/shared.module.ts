import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    /** Forms */
    ReactiveFormsModule,

    /** Angular Material */
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    HeaderComponent,
  ],
})
export class SharedModule {}
