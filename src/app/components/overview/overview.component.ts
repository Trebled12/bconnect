import { Component, OnInit } from '@angular/core';
import {Company} from "../../models/company";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  currentCompany: Company = new Company()
  constructor() { }

  ngOnInit(): void {
  }

}
