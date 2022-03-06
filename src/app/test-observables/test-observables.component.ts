import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.scss']
})
export class TestObservablesComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  obsValue = new Observable((observer) => {
    console.log("Observable starts");
    setTimeout(() => {
      console.log("return value");
      observer.next("90000")
    }, 1000);
  });

  hounds: Observable<any> = this.getHoundList();
 
  getHoundList(): Observable<any> {
    return this.http.get<any>("https://dog.ceo/api/breed/hound/list")
  }

}
