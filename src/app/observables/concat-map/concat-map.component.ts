import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css'
})
export class ConcatMapComponent implements OnInit {
  ngOnInit(): void {
    this.mapExample();
    this.mapConcatAllExample();
    this.concatMapExample();
  }

  mapExample() {
    const source = from(['Music', 'News', 'Tech']);

    source.pipe(
      map(res => this.getData(res))
    ).subscribe((res) => {
      console.log(res);
      this.print(res, 'elContainer1');
    })
  }

  mapConcatAllExample() {
    const source = from(['Music', 'News', 'Tech']);

    source.pipe(
      map(res => this.getData(res)),
      concatAll(),
    ).subscribe((res) => {
      console.log(res);
      this.print(res, 'elContainer2');
    })
  }

  concatMapExample() {
    const source = from(['Music', 'News', 'Tech']);

    source.pipe(
      concatMap(res => this.getData(res)),
    ).subscribe((res) => {
      console.log(res);
      this.print(res, 'elContainer3');
    })
  }

  getData(data: string) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }

  print(value: any, containerName: string) {
    let el = document.createElement('li');
    el.innerText = value;

    document.getElementById(containerName)?.appendChild(el);
  }
}
