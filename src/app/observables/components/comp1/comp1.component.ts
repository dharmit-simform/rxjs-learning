import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilsService } from '../../../app-services/utils.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
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
