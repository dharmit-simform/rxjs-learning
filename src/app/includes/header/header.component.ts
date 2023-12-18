import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../app-services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  subjectPage: boolean = false;
  constructor(
    private _utilService: UtilsService
  ) { }

  ngOnInit(): void {
    this._utilService.exclusive.subscribe(res => {
      this.subjectPage = res
    })
  }
}
