import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.css'
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef | undefined;
  @ViewChild('myInput2') myInput2: ElementRef | undefined;

  searchTerm1: any;
  searchTerm2: any;

  ngAfterViewInit(): void {
    const searchTerm = fromEvent<any>(this.myInput?.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500)
    );
    searchTerm.subscribe(res => {
      this.searchTerm1 = res;
      console.log(res);
    })

    const searchTerm1 = fromEvent<any>(this.myInput2?.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );
    searchTerm1.subscribe(res => {
      this.searchTerm2 = res;
      console.log(res);
    })
  }
}
