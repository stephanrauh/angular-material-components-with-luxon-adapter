import { DateTime } from "luxon";
import { NgxMatDateFormats } from "projects/datetime-picker/src/lib/core/date-formats";


const DEFAULT_DATE_INPUT = {...DateTime.DATE_SHORT, ...DateTime.TIME_24_WITH_SECONDS};

export const NGX_MAT_LUXON_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: ['MM/dd/yyyy, hh:mm:ss', 'dd.MM.yyyy, hh:mm:ss',
                'MM/dd/yyyy, hh:mm:s', 'dd.MM.yyyy, hh:mm:s',
                'MM/dd/yyyy, hh:mm', 'dd.MM.yyyy, hh:mm'],
  },
  display: {
    dateInput: DEFAULT_DATE_INPUT,
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
