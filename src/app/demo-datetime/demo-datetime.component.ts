import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-demo-datetime',
  templateUrl: './demo-datetime.component.html',
  styleUrls: ['./demo-datetime.component.scss']
})
export class DemoDatetimeComponent implements OnInit {

  @ViewChild('picker', { static: true }) picker: any;

  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: DateTime;
  public maxDate: DateTime;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  public disableMinute = false;
  public hideTime = false;

  public dateControl = new FormControl(DateTime.now());

  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  public listColors = ['primary', 'accent', 'warn'];

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];


  constructor() { }

  ngOnInit() {
    // this.picker.closedStream.subscribe(() => {
    //   console.log('closed');
    // })
    // this.picker.openedStream.subscribe(() => {
    //   console.log('opened');
    // })
  }

  toggleMinDate(evt: any) {
    if (evt.checked) {
      this._setMinDate();
    } else {
      this.minDate = null;
    }
  }

  toggleMaxDate(evt: any) {
    if (evt.checked) {
      this._setMaxDate();
    } else {
      this.maxDate = null;
    }
  }

  closePicker() {
    this.picker.cancel();
  }

  private _setMinDate() {
    this.minDate = DateTime.now().minus({day: 1});
  }


  private _setMaxDate() {
    this.maxDate = DateTime.now().minus({day: 1});
  }

}
