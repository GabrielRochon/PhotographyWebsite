import { IIcon } from './../interfaces/i-icon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  icons: IIcon[] = [
    { iconName: "Camera",    label: "Professional pictures" },
    { iconName: "Groups",    label: "250+ followers on Instagram" },
    { iconName: "PiggyBank", label: "Fair prices" },
    { iconName: "Editing",   label: "Editing included" }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
