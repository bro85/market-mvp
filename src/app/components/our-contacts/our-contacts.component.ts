import { Component, OnInit } from '@angular/core';
import { OurAddressInterface } from '../../interfaces/our-address.interface';
import { OurAddressService } from '../../services/our-address.service';

@Component({
  selector: 'app-our-contacts',
  templateUrl: './our-contacts.component.html',
  styleUrls: ['./our-contacts.component.scss']
})
export class OurContactsComponent implements OnInit {

  public addressArr: OurAddressInterface[] = [];

  constructor(private ourAddressService: OurAddressService) {}

  ngOnInit(): void {
    this.addressArr = this.ourAddressService.getAddressArr();
  }

}
