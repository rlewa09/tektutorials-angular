import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges {
  value = "hi";
  clickCount=0;
  clickCount1=0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  welcomeMessage() {
    return "Praveen";
  }

  clickMe() {
    this.clickCount++;
  }

  handleInput(event: any) {
    this.value = (event.target as HTMLInputElement).value;
  }

}
