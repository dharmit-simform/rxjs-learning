import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrl: './custom-observable.component.css'
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  techStatus = '';
  techStatus2 = '';
  subs2: Subscription | undefined;
  subs3: Subscription | undefined;
  currentName: any;

  ngOnInit(): void {
    this.example1();
    this.example2();
    this.example3();
  }

  example1() {
    const cusObs1 = new Observable(observer => {
      setTimeout(() => {
        observer.next('Angular');
      }, 500);

      setTimeout(() => {
        observer.next('Nodejs');
      }, 1000);

      setTimeout(() => {
        observer.next('HTML');
      }, 1500);

      setTimeout(() => {
        observer.next('CSS');
        // observer.error(new Error('Limit Exceeded'));
      }, 2000);

      setTimeout(() => {
        observer.next('JavaScript');
      }, 2500);

      setTimeout(() => {
        observer.next('MongoDB');
        observer.complete();
      }, 3000);
    });

    cusObs1.subscribe(res => {
      // console.log(res);
      this.print(res, 'elContainer')
    }, (err) => {
      this.techStatus = 'error';
    }, () => {
      this.techStatus = 'completed';
    })
  }

  example2() {
    const arr = ['Angular', 'Nodejs', 'JavaScript', 'HTML CSS', 'AWS']
    let count = 0;
    const cusObs2 = new Observable(observer => {
      setInterval(() => {
        observer.next(arr[count]);
        count++;

        if (count >= arr.length) {
          observer.complete();
        }
      }, 500);
    })

    this.subs2 = cusObs2.subscribe(res => {
      console.log(res);
      this.print(res, 'elContainer2');
    }, (err) => {
      this.techStatus2 = 'error';
    }, () => {
      this.techStatus2 = 'completed';
    })
  }

  example3() {
    const arr = ['Jake', 'Andrew', 'Thomas', 'Albert', 'Rutherford', 'Bohr'];
    let count = 0;
    const cusObs3 = new Observable(observer => {
      setInterval(() => {
        observer.next(arr[count]);
        count++;

        if (count >= arr.length) {
          observer.complete();
        }
      }, 500);
    });

    this.subs3 = cusObs3.subscribe(res => {
      console.log(res);
      this.currentName = res;
    }, (err) => {
      this.techStatus2 = 'error';
    }, () => {
      this.techStatus2 = 'completed';
    })
  }

  ngOnDestroy(): void {
    this.subs2?.unsubscribe();
  }

  print(value: any, containerName: string) {
    let el = document.createElement('li');
    el.innerText = value;

    document.getElementById(containerName)?.appendChild(el);
  }
}
