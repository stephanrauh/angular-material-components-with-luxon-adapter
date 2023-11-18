

// import { NgxMatDateAdapter, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxMatDateAdapter } from 'projects/datetime-picker/src/lib/core/date-adapter';
import { NGX_MAT_DATE_FORMATS } from 'projects/datetime-picker/src/lib/core/date-formats';
import { MyLuxonDateAdapter, MAT_LUXON_DATE_ADAPTER_OPTIONS } from './my-luxon-date-adapter';
import { NGX_MAT_LUXON_FORMATS } from './luxon-formats';

@NgModule({
  providers: [
    {
      provide: NgxMatDateAdapter,
      useClass: MyLuxonDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS]
    }
  ],
})
export class MyNgxLuxonDateModule { }


@NgModule({
  imports: [MyNgxLuxonDateModule],
  providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: NGX_MAT_LUXON_FORMATS }],
})
export class MyNgxMatLuxonModule { }
