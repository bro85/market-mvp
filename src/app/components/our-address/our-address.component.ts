import { Component, OnInit } from '@angular/core';
import { OurAddressService } from '../../services/our-address.service';
import { OurAddressInterface } from '../../interfaces/our-address.interface';

@Component({
  selector: 'app-our-address',
  templateUrl: './our-address.component.html',
  styleUrls: ['./our-address.component.scss']
})
export class OurAddressComponent implements OnInit {

  public addressArr: OurAddressInterface[] = [];

  constructor(private ourAddressService: OurAddressService) {}

  ngOnInit(): void {
    this.addressArr = this.ourAddressService.getAddressArr();
  }

}
