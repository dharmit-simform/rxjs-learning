import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map, filter, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.css'
})
export class ShareReplayComponent implements OnInit {

  allProducts!: Observable<any>;
  clothing!: Observable<any>;
  home!: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.allProducts = this.http.get('http://localhost:3000/products').pipe(shareReplay());

    this.clothing = this.allProducts.pipe(
      map(res => res.filter((data: any) => {
        return data['category'] === "Clothing";
      }))
    );

    this.home = this.allProducts.pipe(
      map(res => res.filter((data: any) => {
        return data['category'] === "Home";
      }))
    )
  }

}
