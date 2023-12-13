import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css'
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn: ElementRef | undefined;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let count = 0;
    fromEvent(this.addBtn?.nativeElement, 'click').subscribe(response => {
      this.print(`Video ${++count}`);
    })
  }

  print(value: any) {
    let el = document.createElement('li');
    el.innerText = value;

    document.getElementById('elContainer')?.appendChild(el);
  }
}
