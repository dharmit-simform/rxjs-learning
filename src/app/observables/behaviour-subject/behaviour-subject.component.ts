import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilsService } from '../../app-services/utils.service';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrl: './behaviour-subject.component.css'
})
export class BehaviourSubjectComponent implements OnInit, OnDestroy {
  data = '';
  constructor(
    private _utilService: UtilsService
  ) { }

  ngOnInit(): void {
    this._utilService.exclusive.next(true);
    this._utilService.username.subscribe(res => {
      this.data = res;
    })
  }

  ngOnDestroy(): void {
    this._utilService.exclusive.next(false);
  }
}
