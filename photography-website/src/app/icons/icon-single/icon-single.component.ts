import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-single',
  templateUrl: './icon-single.component.html',
  styleUrls: ['./icon-single.component.scss']
})
export class IconSingleComponent implements OnInit {

  @Input() icon: string = '';
  @Input() label: string = '';

  public iconSource = '';

  constructor() { }

  ngOnInit(): void {
    this.iconSource = "../../../assets/icons/" + this.icon + ".svg";
  }
}
