import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrl: './take.component.css'
})
export class TakeComponent implements OnInit {

  randomName = ['Iron Man', 'Thor', 'Captain America', 'Hulk', 'Spiderman', 'Black Panther', 'Ant Man', 'Doctor Strange'];

  ngOnInit(): void {
    this.takeExample();
    this.takeLastExample();
    this.takeUntilExample();
  }

  takeExample() {
    const source = from(this.randomName).pipe(take(4));

    source.subscribe(res => {
      this.print(res, 'elContainer')
      console.log(res);
    })
  }

  takeLastExample() {
    const source = from(this.randomName).pipe(takeLast(4));

    source.subscribe(res => {
      this.print(res, 'elContainer2')
      console.log(res);
    })
  }

  takeUntilExample() {
    const source = interval(1000);

    // Condition
    let condition = fromEvent(document, 'click');

    source.pipe(
      map(res => 'Number ' + res),
      takeUntil(condition)
    ).subscribe(res => {
      console.log(res);
      this.print(res, 'elContainer3')
    })
  }

  print(value: any, containerName: string) {
    let el = document.createElement('li');
    el.innerText = value;

    document.getElementById(containerName)?.appendChild(el);
  }
}
