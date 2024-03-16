import {Component, OnInit, signal} from '@angular/core';
import {WorkersService} from "./services/workers/workers.service";
import {filter, map, reduce} from "rxjs";

interface worker {
  name: string;
  age: number;
  city: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private serviceWorkers: WorkersService) {
  }
  companyWorkers = signal<worker[]>([])

  ngOnInit() {
    //this.getWorkers()
  }

  getWorkers() {
    this.serviceWorkers.getWorkersData().pipe(
      map(elem => {
        return elem.filter(elemx => elemx.name !== 'Jack')
      })
    ).subscribe(data => {
          console.log(data)
          this.companyWorkers.set(data)
        }
    )
  }
}
