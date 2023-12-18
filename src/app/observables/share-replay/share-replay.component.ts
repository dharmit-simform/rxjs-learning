import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.css'
})
export class ShareReplayComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      console.log(res);
    })
  }

}
