import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.scss']
})
export class TestObservablesComponent implements OnInit {

  obsValue = new Observable((observer) => {
    console.log("Observable starts");
    setTimeout(() => {
      console.log("return value");
      observer.next("90000")
    }, 1000);
  }).pipe(shareReplay());

  constructor() { }

  ngOnInit(): void {
  }

}
