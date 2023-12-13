import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  dataArr = [
    { id: 1, name: "Shelley Hebbard", email: "shebbard0@wix.com", gender: "Female" },
    { id: 2, name: "Brittni Essery", email: "bessery1@csmonitor.com", gender: "Female" },
    { id: 3, name: "Ingmar Bushell", email: "ibushell2@ucoz.ru", gender: "Male" },
    { id: 4, name: "Zak Taleworth", email: "ztaleworth3@sina.com.cn", gender: "Female" },
    { id: 5, name: "Iggy Stenner", email: "istenner4@hao123.com", gender: "Male" },
    { id: 6, name: "Avigdor Bryson", email: "abryson5@seesaa.net", gender: "Female" },
    { id: 7, name: "Rog Jackson", email: "rdickson6@creativecommons.org", gender: "Male" },
    { id: 8, name: "Felizio Craft", email: "fcraft7@comcast.net", gender: "Male" },
    { id: 9, name: "Joline Banbrick", email: "jbanbrick8@craigslist.org", gender: "Female" },
    { id: 10, name: "Jo-anne Faulo", email: "jfaulo9@chronoengine.com", gender: "Female" },
    { id: 11, name: "Janeen Fishbourn", email: "jfishbourna@yandex.ru", gender: "Female" },
    { id: 12, name: "Manda Doddrell", email: "mdoddrellb@spiegel.de", gender: "Female" },
    { id: 13, name: "Jedediah Sich", email: "jsichc@gravatar.com", gender: "Male" },
    { id: 14, name: "Addie Gethings", email: "agethingsd@yelp.com", gender: "Female" },
    { id: 15, name: "Guy Scowcraft", email: "gscowcrafte@angelfire.com", gender: "Male" }
  ];

  dataLength: any;
  dataGender: any;
  dataSize: any;

  ngOnInit(): void {
    const source = from(this.dataArr);

    // Filter By Length
    source.pipe(
      filter(data => data.name.length < 14),
      toArray()
    ).subscribe(data => {
      this.dataLength = data;
    });

    // Filter By Gender
    source.pipe(
      filter(data => data.gender === 'Female'),
      toArray()
    ).subscribe(data => {
      this.dataGender = data;
    })

    // Filter By Gender
    source.pipe(
      filter(data => data.id <= 6),
      toArray()
    ).subscribe(data => {
      this.dataSize = data;
    })
  }
}
