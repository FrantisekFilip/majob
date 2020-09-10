import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() values: {name:string, value: any}
  @Output() result = new EventEmitter()
  value
  constructor() { }

  ngOnInit(): void {
    this.value = this.values[0].value
  }

  select() {
    this.result.emit(this.value)
  }

}
