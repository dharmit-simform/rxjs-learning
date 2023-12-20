import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrl: './catch-error.component.css'
})
export class CatchErrorComponent implements OnInit {
  allProducts: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getProducts() {
    this.allProducts = this.http.get('http://localhost:3001/products').pipe(
      catchError(this.handleError)
    ).subscribe(res => {
      this.allProducts = res;
    });
  }

  handleError(error: any) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code ${error.status}\n Message: ${error.message}`;
    }
    console.log(error);
    return throwError(() => errorMessage);
  }
}


