import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { ApiInterceptor } from './services/api.service';
import { UsersService } from './services/users.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    UsersService,
  ],
})
export class CoreModule {};
