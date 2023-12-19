import { Component } from '@angular/core';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css'
})
export class CombineLatestComponent {
  selectSource = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'];
  colorSource = ['red', 'green', 'blue', 'violet', 'purple', 'grey'];
}
