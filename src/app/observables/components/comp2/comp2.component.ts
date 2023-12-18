import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilsService } from '../../../app-services/utils.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  data = '';
  @ViewChild('myInput') myInput!: ElementRef;

  constructor(
    private _utilService: UtilsService
  ) {
    this._utilService.username.subscribe(res => {
      this.data = res;
    })
  }

  onSubmit() {
    this.data = this.myInput.nativeElement.value;
    this._utilService.username.next(this.data);
  }
}
