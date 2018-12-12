import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {Router} from '@angular/router';

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

    private selector;

    constructor(private router: Router) {
    }

    ngOnInit() {
        if (this.item && this.item.length == this.options.count) {
            this.isLoading = false;
            this.selector = this.options.headers.id.toLowerCase()+'s';
        } else {
            this.isLoading = true;
            this.loadingArray = Array(this.options.count).fill(4);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes.item.firstChange && changes.item.currentValue.length == this.options.count) {
            this.isLoading = false;
            this.selector = this.options.headers.id.toLowerCase()+'s';
        }
    }

    routeToInstance = (sourceID : string) => {
        console.log(`monitoring/${this.selector}/${sourceID}`);
        this.router.navigate([`monitoring/${this.selector}/${sourceID}`]).then();
    }

}
