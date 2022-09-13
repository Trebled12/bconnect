import { Injectable } from '@angular/core';
import {Observable, shareReplay} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicecallsService {

  constructor(private httpClient: HttpClient) {
    // this.getRestScooters().subscribe(value => {
    //
    // }, error => {
    //   console.log(error)
    // })
  }

  getRestCoc(cocNumber: number) {
    return this.httpClient.get("https://developers.kvk.nl/test/api/v1/zoeken?kvkNummer=90005414&pagina=1&aantal=10")
      // .pipe(shareReplay(1));
  }
}
