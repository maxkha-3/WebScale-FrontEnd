import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-instance-overview',
    templateUrl: './instance-overview.component.html',
    styleUrls: ['./instance-overview.component.scss']
})
export class InstanceOverviewComponent implements OnInit {

    public sourceType: string;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['sourceType'] == "monitors" || params['sourceType'] == "streams" || params['sourceType'] == "tasks") {
                this.sourceType = params['sourceType'];
            } else {
                this.router.navigate(['home']).then();
            }
        });
    }

    /**
     * Routes to an instance for monitoring.
     * @param sourceType
     * @param sourceID
     */
    routeToInstance = (sourceType: string, sourceID : string) => {
        this.router.navigate(['monitoring/' + sourceType, sourceID]).then();
    }

}
