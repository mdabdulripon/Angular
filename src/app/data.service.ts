import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, from } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public headers: any;
  public rows: any;

  constructor( private http: HttpClient ) { }

  getData(): Observable<any> {
    const headers = this.http.get('../assets/data/column.json');
    const rows = this.http.get('../assets/data/rows.json');

    return forkJoin([headers, rows]).pipe(
      map(res => {
        const data = [].concat(...res);
        console.log("data", data);
        return data;
      })
    )
  }
}
