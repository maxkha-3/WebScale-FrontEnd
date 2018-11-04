import {Injectable} from '@angular/core';

@Injectable()
export class FormlyFieldBaseService {

    constructor() {
    }

    getSelectBase = (key: string, label: string, required: boolean, disabled: boolean) => {
        return {
            key: key,
            type: 'select',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
                label: label,
                required: required,
                options: []
            }
        };
    };

    getInputBase = (key: string, label: string, required: boolean, disabled: boolean) => {
        return {
            key: key,
            type: "input",
            wrappers: ['form-field-horizontal'],
            templateOptions: {
                label: label,
                placeholder: "Enter " + label,
                required: required,
                disabled: disabled
            }
        };
    }
}
