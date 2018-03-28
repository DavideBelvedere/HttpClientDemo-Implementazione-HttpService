import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/MenuItem';
import { RoutingEnum } from '../../model/enum/RoutingEnum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private menuList: MenuItem[] = [
    new MenuItem(RoutingEnum.Home, "Home"),
    new MenuItem(RoutingEnum.List, "List"),
    new MenuItem(RoutingEnum.Edit, "Edit")
  ];

  constructor() { }

}
