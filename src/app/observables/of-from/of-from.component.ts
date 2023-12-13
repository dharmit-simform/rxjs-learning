import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css'
})
export class OfFromComponent implements OnInit {
  obsMsg: any;

  ngOnInit(): void {
    this.ofExamples();
    this.fromExamples();
  }

  ofExamples() {
    const obs1 = of('Jake', 'Andrew', 'Thomas');

    obs1.subscribe(res => {
      this.print(res, 'elContainer');
      console.log(res);
    })

    const obs2 = of({ a: 'Jake', b: 'Andrew', c: 'Thomas' });
    obs2.subscribe(res => {
      this.obsMsg = res;
      console.log("obsMsg: ", res);
    })
  }

  fromExamples() {
    let arr = ['Jake', 'Andrew', 'Thomas'];
    // From Array
    const obs1 = from(arr);
    obs1.subscribe(res => {
      console.log(res);
      this.print(res, 'elContainer1');
    })

    // From Promise
    const promise = new Promise((resolve) => {
      setTimeout(() => { resolve('Promise Resolved') }, 3000)
    })

    const obs2 = from(promise);
    obs2.subscribe(res => {
      this.print(res, 'elContainer2')
      console.log(res);
    })

    // From Stream
    const obs3 = from('Hello World');
    obs3.subscribe(res => {
      this.print(res, 'elContainer3')
      console.log(res);
    })
  }

  print(value: any, containerName: string) {
    let el = document.createElement('li');
    el.innerText = value;

    document.getElementById(containerName)?.appendChild(el);
  }
}
