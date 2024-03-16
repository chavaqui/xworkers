import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

interface worker {
  name: string;
  age: number;
  city: string;
}
@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor() { }

  getWorkersData(): Observable<worker[]> {
    const mockData: worker[] = [
      { name: 'Jack', age: 30, city: 'New York' },
      { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { name: 'Carl coxen', age: 29, city: 'Neptune' },
    ];
    return of(mockData)
  }
}
