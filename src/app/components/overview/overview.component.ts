import {Component, OnInit} from '@angular/core';
import {Company, EnumEmployees} from "../../models/company";
import {ServicecallsService} from "../services/servicecalls.service";
import {shareReplay} from "rxjs";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {


  currentCompany: Company = new Company()


  constructor(private serviceCalls: ServicecallsService) { }

  ngOnInit(): void {
  }

  checkNeededValues(): boolean {
    return this.currentCompany.companyName.trim().length == 0 ||
      this.currentCompany.telephoneNumber.trim().length == 0 ||
      this.currentCompany.employees == EnumEmployees.NOTSET ||
      this.currentCompany.cocNumber.toString().length != 8 ||
      this.currentCompany.vatNumber.trim().length == 0 ||
      this.currentCompany.ibanNumber.trim().length == 0 ||
      this.currentCompany.description.trim().length == 0 ||
      !this.checkIbanNumber()
      // !this.checkPhoneNumber()
  }

  logModel() {
    console.log(this.currentCompany)
  }

  // telephonenumber format template: 0201234567
  checkPhoneNumber(): boolean {
    const regex = new RegExp("^020[0-9]{7}$")
    return regex.test(this.currentCompany.telephoneNumber)
  }

  // iban format template: NL00ABCD0123456789
  checkIbanNumber(): boolean {
    const regex = new RegExp("^NL[0-9]{2}[A-z0-9]{4}[0-9]{10}$")
    return regex.test(this.currentCompany.ibanNumber);
  }

  checkCocNumber() {
    this.serviceCalls.getRestCoc().subscribe(value => {
      console.warn(value)
    }, error => {
      console.warn(error)
    })

  }


}
