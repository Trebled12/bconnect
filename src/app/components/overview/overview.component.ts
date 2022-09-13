import {Component, OnInit} from '@angular/core';
import {Company, EnumEmployees} from "../../models/company";

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

  checkNeededValues(): boolean {
    return this.currentCompany.companyName.trim().length == 0 ||
      this.currentCompany.telephoneNumber.trim().length == 0 ||
      this.currentCompany.employees == EnumEmployees.NOTSET ||
      this.currentCompany.cocNumber.trim().length == 0 ||
      this.currentCompany.vatNumber.trim().length == 0 ||
      this.currentCompany.ibanNumber.trim().length == 0 ||
      this.currentCompany.description.trim().length == 0
  }

  checkPhoneNumber(): boolean {
    return true
  }

}
