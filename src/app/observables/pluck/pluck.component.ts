import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.css'
})
export class PluckComponent implements OnInit {

  users = [
    { name: 'Dharmit', skills: 'Angular, Nodejs, TypeScript', job: { title: "Full Stack Developer " } },
    { name: 'John', skills: 'Nodejs', job: { title: "Backend Developer " } },
    { name: 'Andrew', skills: 'HTML, CSS, JS', job: { title: "Frontend Developer " } },
    { name: 'Micheal', skills: 'PHP, Laravel', job: { title: "PHP Developer " } },
  ]

  data: any;

  ngOnInit(): void {
    // Without Nested Property
    from(this.users)
      .pipe(
        pluck('name'),
        toArray()
      )
      .subscribe(res => {
        this.data = res;
      });

    from(this.users)
      .pipe(
        pluck('job', 'title'),
        toArray()
      )
      .subscribe(res => {
        console.log(res);
      })
  }
}
