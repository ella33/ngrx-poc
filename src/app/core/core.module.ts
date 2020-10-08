import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    SharedModule,
  ],
})
export class CoreModule {};
