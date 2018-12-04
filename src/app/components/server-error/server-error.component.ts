import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {GlobalService} from '../../services/global-service/global.service';

@Component({
    selector: 'app-server-error',
    templateUrl: './server-error.component.html',
    styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit, OnDestroy {

    public interval: any;

    constructor(private router: Router, private http: HttpClient, private global: GlobalService) {
    }

    ngOnInit() {
        this.reconnectToServer();
        this.interval = setInterval(() => {
            this.reconnectToServer();
        }, 5000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    /**
     * Function, that attempts to reconnect to server. Navigates to 'home', if successful.
     */
    reconnectToServer = () => {
        this.http.get(this.global.apiServerTargetAddressBase + "ping").subscribe(data => {
            if (data["result"] == "pong") {
                this.router.navigate(['home']).then();
            }
        });
    }
}
