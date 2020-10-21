import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ApiInterceptor } from './services/apiInterceptor.service';
import { UsersService } from './services/users.service';

import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    HttpClientModule,
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
export class CoreModule {}
