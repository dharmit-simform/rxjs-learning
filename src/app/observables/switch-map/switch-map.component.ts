import { Component, OnInit } from '@angular/core';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css'
})
export class SwitchMapComponent implements OnInit {
  ngOnInit(): void {
    this.mapExample();
    this.mapSwitchAllExample();
    this.switchMapExample();
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

  mapSwitchAllExample() {
    const source = from(['Music', 'News', 'Tech']);

    source.pipe(
      map(res => this.getData(res)),
      switchAll(),
    ).subscribe((res) => {
      console.log(res);
      this.print(res, 'elContainer2');
    })
  }

  switchMapExample() {
    const source = from(['Music', 'News', 'Tech']);

    source.pipe(
      switchMap(res => this.getData(res)),
    ).subscribe((res) => {
      console.log(res);
      this.print(res, 'elContainer3');
    })
  }

  getData(data: string) {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }

  print(value: any, containerName: string) {
    let el = document.createElement('li');
    el.innerText = value;

    document.getElementById(containerName)?.appendChild(el);
  }
}
