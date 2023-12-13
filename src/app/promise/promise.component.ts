import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent implements OnInit {
  promiseVal: any;

  dell = {
    brand: 'Dell',
    hardDisk: '2TB',
    color: 'white'
  }

  lenovo = {
    brand: 'Lenovo',
    hardDisk: '1TB',
    color: 'silver'
  }

  laptopNotAvailable = {
    brand: 'not available',
    status: 'not available'
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        return setTimeout(() => {
          // resolve('Dell is Purchased')
          resolve(this.dell)
        }, 3000)
      } else if (this.lenovoAvailable()) {
        return setTimeout(() => {
          // resolve('Lenovo is available')
          resolve(this.lenovo)
        }, 3000);
      } else {
        return setTimeout(() => {
          // reject('No Laptop Available')
          reject(this.laptopNotAvailable)
        }, 3000);
      }
    });

    buyLaptop.then(res => {
      console.log("Success : ", res);
      this.promiseVal = res;
    }).catch(err => {
      console.log("Error : ", err);
      this.promiseVal = err;

    })
  }

  dellAvailable() {
    return false;
  }

  lenovoAvailable() {
    return true;
  }

}
