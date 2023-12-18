import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  exclusive = new Subject<boolean>();
  username = new BehaviorSubject<string>('John');

  videoEmit = new ReplaySubject<string>(3, 2000);

  asyncVideEmit = new AsyncSubject();
  constructor() { }
}
