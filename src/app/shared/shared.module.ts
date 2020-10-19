import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HeaderComponent } from './components/header/header.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoadingIndicatorComponent,
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
    MatProgressSpinnerModule,
  ],
  exports: [
    HeaderComponent,
    FlexLayoutModule,
    LoadingIndicatorComponent,
  ],
})
export class SharedModule {}
