import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    form = new FormGroup({});
    model = {email: 'email@gmail.com', name: 'Maxim'};
    fields: FormlyFieldConfig[] = [
        {
            key: 'email',
            type: 'input',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'Enter email',
                required: true,
            }
        },
        {
            key: 'name',
            type: 'input',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
                label: 'First name',
                placeholder: 'Enter name'
            }
        }
    ];
}
