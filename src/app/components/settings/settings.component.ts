import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import {GlobalService} from '../../services/global-service/global.service';
import {LayoutFetchingService} from '../../services/layout-fetching-service/layout-fetching.service';
import {EventServerService} from '../../services/event-server-service/event-server.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    constructor(private global: GlobalService, private layoutFetcher: LayoutFetchingService, private eventFetcher: EventServerService) {
    }

    ngOnInit() {
    }

    form = new FormGroup({});
    model = {
        email: 'admin@kubescale.cloud',
        name: 'Kube Admin 1',
        organization: 'KubeScale Cloud',
        metricsApiAddr: this.global.apiServerTargetAddressBase,
        predsApiAddr: this.global.predictionServerTargetAddressBase,
        esApiAddr: this.global.eventServerTargetAddressBase
    };
    fields: FormlyFieldConfig[] = [
        {
            key: 'name',
            type: 'input',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
                label: 'Account',
                placeholder: 'Enter name',
                disabled: true
            }
        },
        {
            key: 'email',
            type: 'input',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'Enter email'
            }
        },
        {
            key: 'organization',
            type: 'input',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
                label: 'Organization',
                placeholder: 'Organization'
            }
        },
        {
            key: 'metricsApiAddr',
            type: 'input',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
                label: 'Metrics API path',
                placeholder: 'Metrics API path',
                disabled: true
            }
        },
        {
            key: 'predsApiAddr',
            type: 'input',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
                label: 'Predictions API path',
                placeholder: 'Predictions API path',
                disabled: true
            }
        },
        {
            key: 'esApiAddr',
            type: 'input',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
                label: 'Event Server API path',
                placeholder: 'Event Server API path',
                disabled: true
            }
        }
    ];

    /**
     * Clears Local Storage and emits events, which trigger a reload of some components
     */
    clearLocalStorage = (): void => {
        localStorage.clear();
        this.layoutFetcher.layoutsCleared.next();
        this.eventFetcher.eventIncoming.next();
    }
}
