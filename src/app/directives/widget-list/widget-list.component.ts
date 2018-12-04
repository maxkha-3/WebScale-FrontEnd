import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';

@Component({
    selector: 'app-widget-list',
    templateUrl: './widget-list.component.html',
    styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit, OnChanges {

    @Input() item;
    @Input() options;

    public isLoading = true;
    public loadingArray: any[] = [];

    constructor() {
    }

    ngOnInit() {
        if (this.item && this.item.length == this.options.count) {
            this.isLoading = false;
        } else {
            this.isLoading = true;
            this.loadingArray = Array(this.options.count).fill(4);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes.item.firstChange && changes.item.currentValue.length == this.options.count) {
            this.isLoading = false;
        }
    }

}
