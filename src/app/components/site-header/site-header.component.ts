import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MenuItemInterface } from '../../interfaces/menu-items.interface';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  public isOpenedMenu: boolean = false;
  public menuData: MenuItemInterface[] = [
    {
      routerLink: '/admin',
      class: 'menu__item',
      routerLinkActive: 'active',
      text: 'Адмінка'
    },
    {
      routerLink: '/',
      class: 'menu__item',
      routerLinkActive: 'active',
      text: 'Головна'
    },
    {
      routerLink: '/catalog',
      class: 'menu__item',
      routerLinkActive: 'active',
      text: 'Каталог'
    },
    {
      routerLink: '/contact-us',
      class: 'menu__item',
      routerLinkActive: 'active',
      text: 'Контакти'
    }
  ];
  @ViewChild('openBtn') openBtn: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('closeBtn') closeBtn: ElementRef<HTMLInputElement> | undefined;

  constructor(private _router: Router) {}

  ngOnInit() {
    this._router.events.subscribe( val => {
      if (val instanceof NavigationStart){
        this.onCloseMenu();
      }
    } );
  }

  onShowMenu(): void {
    this.isOpenedMenu = true;
  }

  onCloseMenu(): void {
    this.isOpenedMenu = false;
  }
}
