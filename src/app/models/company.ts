export enum EnumEmployees {
  NOTSET = "",
  ONETEN = "1-10",
  ELEVENTWENTY = "11-20",
  TWENTYONEFIFTY = "21-50",
  FIFTYONETHREEHUNDRED = "51-300",
  THREEHUNDREDPLUS = "300+"
}



export class Company {

  companyName: string;
  telephoneNumber: string;
  employees: EnumEmployees;
  cocNumber: number;
  vatNumber: string;
  ibanNumber: string;
  budget: number;
  description: string;



  constructor(companyName = '', telephoneNumber = '', employees = EnumEmployees.NOTSET,
              cocNumber = 0, vatNumber = '', ibanNumber = '', budget = 0, description = '') {
    this.companyName = companyName
    this.telephoneNumber = telephoneNumber
    this.employees = employees
    this.cocNumber = cocNumber
    this.vatNumber = vatNumber
    this.ibanNumber = ibanNumber
    this.budget = budget
    this.description = description
  }

}
