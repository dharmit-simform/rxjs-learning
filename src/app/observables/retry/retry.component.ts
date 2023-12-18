import { delay, pluck, retry, retryWhen, scan, take, toArray } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.css'
})
export class RetryComponent implements OnInit {
  persons: any;
  persons2: any;

  fetching: boolean = false;
  status = 'No Data';

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    // this.getUsersData();
  }

  getUsersData() {
    this.fetching = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(retry(4)).subscribe(res => {
      this.persons = res;
      this.fetching = false;
      this.status = 'Data Fetched';
    }, (err) => {
      console.log(err);
      this.fetching = false;
      this.status = 'Error in Fetching';
    })
  }

  getUsersDataRetryWhen() {
    this.fetching = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      retryWhen(err => {
        return err.pipe(
          delay(3000),
          scan((retryCount) => {
            if (retryCount >= 5) {
              throw err;
            } else {
              retryCount++;
              return retryCount;
            }
          })
        )
      })
    ).subscribe(res => {
      this.persons2 = res;
      this.fetching = false;
      this.status = 'Data Fetched';
    }, (err) => {
      console.log(err);
      this.fetching = false;
      this.status = 'Error in Fetching';
    })

  }
}
