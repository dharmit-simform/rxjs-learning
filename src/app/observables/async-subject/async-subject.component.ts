import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilsService } from '../../app-services/utils.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css'
})
export class AsyncSubjectComponent {
  @ViewChild('myInput') myInput!: ElementRef;

  asyncVideoEmit: any;

  constructor(
    private _utilService: UtilsService
  ) { }

  ngOnInit(): void {
    this._utilService.asyncVideEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    })
  }

  onAddVideo() {
    console.log(this.myInput.nativeElement.value);
    this._utilService.asyncVideEmit.next(this.myInput.nativeElement.value);
  }

  onCompleteSubscription() {
    this._utilService.asyncVideEmit.complete();
  }
}
