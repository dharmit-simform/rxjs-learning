import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  msg1: any;
  sub1: Subscription | undefined;
  ngOnInit(): void {
    const broadCastVideo = interval(1000);

    this.sub1 = broadCastVideo.pipe(map((data) => { return data * 10; })).subscribe(res => {
      this.msg1 = res;
      console.log(res);
    })

    setTimeout(() => {
      this.sub1?.unsubscribe();
    }, 10000)
  }
}
