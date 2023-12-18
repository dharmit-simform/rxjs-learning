import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { exhaustMap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.css'
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {
  @ViewChild('btn') btn: ElementRef | undefined;
  num = 1;
  obj: any;

  constructor(
    private http: HttpClient
  ) { }
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    fromEvent(this.btn?.nativeElement, 'click').pipe(
      exhaustMap(() => this.onSave(this.num++))
    ).subscribe(res => {
      console.log(res);
      this.obj = res;
    })
  }

  onSave(num: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${num}`);
  }
}
