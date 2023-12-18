import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.css'
})
export class MergeMapComponent implements OnInit {
  ngOnInit(): void {
    this.mapExample();
    this.mapMergeAllExample();
    this.mergeMapExample();
  }

  mapExample() {
    const source = from(['Video', 'Music', 'News', 'Tech']);

    source.pipe(
      map(res => this.getData(res))
    ).subscribe((res) => {
      console.log(res);
      this.print(res, 'elContainer1');
    })
  }

  mapMergeAllExample() {
    const source = from(['Video', 'Music', 'News', 'Tech']);

    source.pipe(
      map(res => this.getData(res)),
      mergeAll(),
    ).subscribe((res) => {
      console.log(res);
      this.print(res, 'elContainer2');
    })
  }

  mergeMapExample() {
    const source = from(['Video', 'Music', 'News', 'Tech']);

    source.pipe(
      mergeMap(res => this.getData(res)),
    ).subscribe((res) => {
      console.log(res);
      this.print(res, 'elContainer3');
    })
  }

  getData(data: string) {
    return of(data + ' Video Uploaded');
  }

  print(value: any, containerName: string) {
    let el = document.createElement('li');
    el.innerText = value;

    document.getElementById(containerName)?.appendChild(el);
  }
}
