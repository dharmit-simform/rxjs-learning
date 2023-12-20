import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css'
})
export class CombineLatestComponent implements AfterViewInit {
  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  selectSource = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'];
  colorSource = ['red', 'green', 'blue', 'violet', 'purple', 'grey'];

  ngAfterViewInit(): void {
    const nameObs = fromEvent(this.name.nativeElement, 'change').pipe(
      map((event: any) => event.target.value)
    );

    const colorObs = fromEvent(this.color.nativeElement, 'change').pipe(
      map((event: any) => event.target.value)
    );

    nameObs.pipe(
      withLatestFrom(colorObs)
    ).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer2');
    })

    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer');
    })
  }

  createBox(name: string, color: string, containerId: string) {
    let el = document.createElement('div');
    el.innerText = name;
    el.style.backgroundColor = color;

    document.getElementById(containerId)?.appendChild(el);
  }
}
