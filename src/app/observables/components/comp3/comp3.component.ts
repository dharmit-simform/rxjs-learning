import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilsService } from '../../../app-services/utils.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css'
})
export class Comp3Component {
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
