import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css'
})
export class IntervalComponent implements OnInit {

  obsMessage: string = ''
  videoSubscription: Subscription | undefined;
  ngOnInit(): void {
    // const broadCastVideo = interval(500);
    const broadCastVideo = timer(5000, 500);

    this.videoSubscription = broadCastVideo.subscribe(res => {
      console.log(res);
      this.obsMessage = 'Video ' + res;
      this.print(this.obsMessage)

      if (res >= 5) {
        this.videoSubscription?.unsubscribe();
      }
    })
  }

  print(value: any) {
    let el = document.createElement('li');
    el.innerText = value;

    document.getElementById('elContainer')?.appendChild(el);
  }
}
