import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, map, take, zip } from 'rxjs';

@Component({
  selector: 'app-zip-fork-join',
  templateUrl: './zip-fork-join.component.html',
  styleUrl: './zip-fork-join.component.css'
})
export class ZipForkJoinComponent implements AfterViewInit {
  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  selectSource = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'];
  colorSource = ['red', 'green', 'blue', 'violet', 'purple', 'grey'];

  ngAfterViewInit(): void {
    const nameObs = fromEvent(this.name.nativeElement, 'change').pipe(
      map((event: any) => event.target.value),
      take(2)
    );

    const colorObs = fromEvent(this.color.nativeElement, 'change').pipe(
      map((event: any) => event.target.value),
      take(2)
    );

    zip(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer')
    })

    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer2')
    })
  }

  createBox(name: string, color: string, containerId: string) {
    let el = document.createElement('div');
    el.innerText = name;
    el.style.backgroundColor = color;

    document.getElementById(containerId)?.appendChild(el);
  }
}
