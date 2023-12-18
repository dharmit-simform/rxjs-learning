import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.css'
})
export class TapComponent implements OnInit {
  obsSub: Subscription | undefined;

  ngOnInit(): void {
    // Example 1

    const arr = ['Iron Man', 'Thor', 'Captain America', 'Hulk', 'Spiderman', 'Black Panther', 'Ant Man', 'Doctor Strange'];
    const source = interval(1000);

    this.obsSub = source.pipe(
      tap(res => {
        if (res === arr.length - 1) {
          this.obsSub?.unsubscribe();
        }
      }),
      map(res => arr[res])
    ).subscribe(res => {
      this.print(res, 'elContainer');
      console.log(res);
    })
  }

  print(value: any, containerName: string) {
    let el = document.createElement('li');
    el.innerText = value;

    document.getElementById(containerName)?.appendChild(el);
  }
}
