import { Injectable } from '@angular/core';
import {Observable, shareReplay} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicecallsService {

  constructor(private httpClient: HttpClient) {

  }

  getRestCoc() {
    const headers = new HttpHeaders()
    return this.httpClient.get("https://developers.kvk.nl/test/api/v1/zoeken?kvkNummer=90002520&pagina=1&aantal=1", {headers: headers})

  }
}
