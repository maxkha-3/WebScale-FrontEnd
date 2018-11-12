import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
