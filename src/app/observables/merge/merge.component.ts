import { Component, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.css'
})
export class MergeComponent implements OnInit {
  ngOnInit(): void {
    const sourceMusic = interval(1000).pipe(map(v => 'Music Video #' + (v + 1)), take(5));
    const sourceVideo = interval(1000).pipe(map(v => 'Video #' + (v + 1)), take(3));
    const sourceNews = interval(1000).pipe(map(v => 'News Video #' + (v + 1)), take(4));

    const final = merge(sourceMusic, sourceVideo, sourceNews);

    final.subscribe(res => {
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
