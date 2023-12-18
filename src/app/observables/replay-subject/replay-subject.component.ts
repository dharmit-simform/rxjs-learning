import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilsService } from '../../app-services/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent implements OnInit {

  @ViewChild('myInput') myInput!: ElementRef;

  user1List: string[] = [];
  user2List: string[] = [];
  user3List: string[] = [];

  user2Subscription = false;
  user3Subscription = false;

  subscription1: Subscription = new Subscription;
  subscription2: Subscription = new Subscription;

  constructor(
    private _utilService: UtilsService
  ) { }

  ngOnInit(): void {
    this._utilService.videoEmit.subscribe(res => {
      this.user1List.push(res);
    })
  }

  onAddVideo() {
    this._utilService.videoEmit.next(this.myInput.nativeElement.value);
  }

  user2Subscribe() {
    if (this.user2Subscription) {
      this.subscription1.unsubscribe();
    } else {
      this.subscription1 = this._utilService.videoEmit.subscribe(res => {
        this.user2List.push(res);
      })
    }
    this.user2Subscription = !this.user2Subscription;
  }

  user3Subscribe() {
    if (this.user3Subscription) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._utilService.videoEmit.subscribe(res => {
        this.user3List.push(res);
      })
    }
    this.user3Subscription = !this.user3Subscription;
  }
}
