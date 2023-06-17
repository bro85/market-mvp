import { Component, Input, OnInit } from '@angular/core';
import { MenuItemInterface } from '../../interfaces/menu-items.interface';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  @Input() data: MenuItemInterface[] = [];

  constructor() {}

  ngOnInit(): void {}

}
