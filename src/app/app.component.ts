import { Component } from '@angular/core';
import { $ } from 'protractor';
import flight_data from './data';

export class FlightService {

  private data: any;

  constructor() {
    this.data = flight_data
  }

  private getFlight() {
    return this.data;
  }

  searchFlight(source: string, dest: string) {
    return this.getFlight().filter((f)=>(f.source.key===source && f.destination.key===dest));
  }

  booknow(name: string, email: string){
    return true;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlightService]
})
export class AppComponent {

  source: string;
  destination: string;
  booking_date: string;
  available_flight: any;
  name: string;
  email: string;
  booking_conf_frm_visible: boolean = false;
  booking_conf_frm_submit: boolean = false;


  // your code here
  constructor(public flightService:FlightService){
  }
  
  openModal(){
    Array.from(document.getElementsByClassName("booknow-frm") as HTMLCollectionOf<HTMLElement>)[0].style.display = "flex";
  }
  closeModal(){
    Array.from(document.getElementsByClassName("booknow-frm") as HTMLCollectionOf<HTMLElement>)[0].style.display = "none";
  }
}
