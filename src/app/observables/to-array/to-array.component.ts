import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.css'
})
export class ToArrayComponent implements OnInit {

  sourceSub: Subscription | undefined;

  users = [
    { name: 'Dharmit', skills: 'Angular, Nodejs, TypeScript' },
    { name: 'John', skills: 'Nodejs' },
    { name: 'Andrew', skills: 'HTML, CSS, JS' },
    { name: 'Micheal', skills: 'PHP, Laravel' },
  ]

  ngOnInit(): void {

    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray()
    ).subscribe(res => {
      console.log(res);
    });

    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe(res => {
      console.log(res);
    });

    const source3 = of('Thomas', 'James', 'Nick', 'Bruce Banner', 'Tony Stark');
    source3.pipe(toArray()).subscribe(res => console.log(res));

  }
}
