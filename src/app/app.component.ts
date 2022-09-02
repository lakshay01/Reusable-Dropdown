import { Component } from '@angular/core';
import { Options } from './options';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public optionsList1: Options[] = [
    {
      value: 'Lakshay',
    },
    {
      value: 'Malhotra',
    },
    { value: 'Hello World' },
    { value: 'Apple' },
    { value: 'Orange' },
  ];

  public optionsList2: Options[] = [
    { value: 'Bitter Gourd' },
    { value: 'Pumpkin' },
    { value: 'Bottle Gourd' },
  ];
}
