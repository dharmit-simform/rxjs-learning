import { Component, OnInit } from '@angular/core';
import { interval, take, map, concat } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.css'
})
export class ConcatComponent implements OnInit {

  ngOnInit(): void {
    const sourceMusic = interval(500).pipe(map(v => 'Music Video #' + (v + 1)), take(5));
    const sourceVideo = interval(1000).pipe(map(v => 'Video #' + (v + 1)), take(3));
    const sourceNews = interval(1000).pipe(map(v => 'News Video #' + (v + 1)), take(4));

    const final = concat(sourceMusic, sourceVideo, sourceNews);

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
