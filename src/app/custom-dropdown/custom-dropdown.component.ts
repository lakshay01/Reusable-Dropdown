import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Options } from '../options';

@Component({
  selector: 'custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css'],
})
export class CustomDropdownComponent implements OnInit {
  constructor() {}
  public dropDownForm: NgForm;
  public isDropDownOpen: boolean = false;
  public dropdown: string = '';
  @Input('options') options: Options[];

  ngOnInit() {
    this.options.map((x) => (x.isActive = false));
  }

  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  selectOption(evt: any, selectedValue: Options) {
    this.dropdown = selectedValue.value;
  }
}
