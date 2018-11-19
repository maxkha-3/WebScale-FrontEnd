import {Component, OnInit, AfterViewInit} from '@angular/core';
import {GlobalService} from '../../services/global-service/global.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutFetchingService} from '../../services/layout-fetching-service/layout-fetching.service';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import {Form, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {FormlyFieldBaseService} from '../../formly/field-bases/formly-field-base.service';
import {UUID} from 'angular2-uuid';

import * as _ from 'lodash';
import * as Muuri from 'muuri';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    public currentDashboard: string;
    public currentDashboardID: string;

    public widgetLayout: Array<any>;
    public widgetGrid: any;

    public validWidgets: any;
    public selectedNewWidget: any;

    public newWidgetModalText: string;
    public newWidgetForm: FormGroup;
    public newWidgetFormModel: any;
    public newWidgetFormFields: FormlyFieldConfig[];

    public widgetSettingsModalText: string;
    public widgetSettingsForm: FormGroup;
    public widgetSettingsFormModel: any;
    public widgetSettingsFormFields: FormlyFieldConfig[];

    public acceptWidgetActionModalArgument: any;

    constructor(private global: GlobalService, private route: ActivatedRoute, private router: Router, private layoutFetcher: LayoutFetchingService, private toastr: ToastrService, public ngxSmartModalService: NgxSmartModalService, private formlyFieldBase: FormlyFieldBaseService) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;

        this.newWidgetForm = new FormGroup({});
        this.newWidgetFormModel = {};
        this.newWidgetFormFields = [];

        this.widgetSettingsForm = new FormGroup({});
        this.widgetSettingsFormModel = {};
        this.widgetSettingsFormFields = [];
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.currentDashboard = _.startCase(params['id']);
                this.currentDashboardID = params['id'];
                this.widgetLayout = this.layoutFetcher.getLayout(_.camelCase(this.currentDashboard)).sort((a, b) => a.order - b.order);
                this.validWidgets = this.layoutFetcher.availableWidgets;
                if (this.widgetLayout == null) {
                    this.router.navigate(['home']).then();
                }
            }
        });

        //In order to redraw the grid, once everything is fetched
        window.dispatchEvent(new Event('resize'));
    }

    ngAfterViewInit() {
        this.widgetGrid = new Muuri('.board', {
            layoutDuration: 400,
            layoutEasing: 'ease',
            dragEnabled: true,
            dragStartPredicate: {
                distance: 0,
                delay: 0,
                handle: '.widget-drag-handle'
            },
            containerClass: 'board',
            itemClass: 'board-item'
        });

        this.widgetGrid.on('dragEnd', this.saveNewWidgetOrder);
    }

    /**
     * Save the dashboard layout's grid order.
     */
    saveNewWidgetOrder = () => {
        const orderArray = this.widgetGrid.getItems().map((elem, index) => ({order: index + 1, id: elem._element.getAttribute('data-widget-id')}));
        for (let widget of this.widgetLayout) {
            widget.order = orderArray.find(x => x.id == widget.ID).order;
        }
        this.layoutFetcher.setLayout(this.currentDashboardID, this.widgetLayout);
    };

    /**
     * Removes widget from a dashboard layout.
     * @param widgetData
     */
    removeWidget = (widgetData: any): void => {
        let index = 0;
        for (let widget of this.widgetLayout) {
            if (_.isEqual(widgetData, widget)) {
                this.widgetLayout.splice(index, 1);
                this.toastr.success('Widget was successfully deleted', 'Success');
            }
            index++;
        }
        this.ngxSmartModalService.getModal('widgetSettingsModal').close();
        this.layoutFetcher.setLayout(this.currentDashboardID, this.widgetLayout);

        this.router.navigate(["dashboard", this.currentDashboardID]).then();

    };

    /**
     * Adds a widget to the dashboard layout and redraws it by reloading the component.
     * @param widgetProperties
     * @param widgetType
     */
    addNewWidget = (widgetProperties: any, widgetType: string) => {
        widgetProperties.size = JSON.parse(widgetProperties.size);
        widgetProperties.widgetType = widgetType;
        widgetProperties.ID = UUID.UUID();
        widgetProperties.Order = this.widgetLayout.length + 1;
        this.widgetLayout.push(widgetProperties);
        this.toastr.success("New widget was added!", "Success!");
        this.layoutFetcher.setLayout(this.currentDashboardID, this.widgetLayout);
        this.ngxSmartModalService.get("newWidgetModal").close();
        this.router.navigate(["dashboard", this.currentDashboardID]).then();
    };

    /**
     * Opens New Widget modal.
     */
    openNewWidgetModal = (): void => {
        this.ngxSmartModalService.get('newWidgetModal').open();
        this.newWidgetModalText = "Add new widget";
    };

    /**
     * Triggers, when New Widget modal is closed.
     */
    resetNewWidgetModal = (): void => {
        this.selectedNewWidget = undefined;
        this.newWidgetFormFields = [];
    };

    /**
     * Updates newWidgetForm according to the chosen widget type.
     * @param widgetTypeBase
     */
    selectNewWidget = (widgetTypeBase: any): void => {
        this.resetNewWidgetModal();
        this.newWidgetModalText = "Add new widget (" + widgetTypeBase.widgetName + ")";
        this.selectedNewWidget = widgetTypeBase;

        for (let option of widgetTypeBase.options) {
            if (option.hasOwnProperty('choices')) {
                let newSelectField = this.formlyFieldBase.getSelectBase(option.type, option.heading, true, false);
                newSelectField['defaultValue'] = option.choices[0].type;
                for (let choice of option.choices) {
                    newSelectField.templateOptions.options.push({label: choice.name, value: choice.type});
                }
                this.newWidgetFormFields = [...this.newWidgetFormFields, newSelectField];
            } else {
                let newTextField = this.formlyFieldBase.getInputBase(option.type, option.heading, true, false);
                this.newWidgetFormFields = [...this.newWidgetFormFields, newTextField];
            }
        }

        let chartSizeField = this.formlyFieldBase.getSelectBase('size', 'Size', true, false);

        //append sizes to size option formly field
        for (let size of this.layoutFetcher.availableSizes) {
            chartSizeField.templateOptions.options.push({label: size.description, value: JSON.stringify(size.size)});
        }
        chartSizeField['defaultValue'] = chartSizeField.templateOptions.options[0].value;
        this.newWidgetFormFields = [...this.newWidgetFormFields, chartSizeField];

        let chartTimeField = this.formlyFieldBase.getSelectBase('timeSpan', 'Timespan', true, false);

        for (let span of this.layoutFetcher.availableTimespans) {
            chartTimeField.templateOptions.options.push({label: span.value, value: span.key});
        }
        chartTimeField['defaultValue'] = chartTimeField.templateOptions.options[0].value;
        this.newWidgetFormFields = [...this.newWidgetFormFields, chartTimeField];
    };

    /**
     * Sets a form for widget settings.
     * @param widgetData
     */
    setWidgetSettingsModal = (widgetData: any): void => {
        this.widgetSettingsFormModel = {...widgetData};

        let widgetTypeBase;
        for (let widget of this.layoutFetcher.availableWidgets) {
            if (widget.widgetType === widgetData.widgetType) {
                widgetTypeBase = widget;
            }
        }
        this.widgetSettingsFormModel.widgetName = widgetTypeBase.widgetName;
        this.widgetSettingsModalText = "Widget Settings (" + widgetTypeBase.widgetName + ")";


        this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, this.formlyFieldBase.getInputBase('widgetName', 'Widget Type', true, true)];
        this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, this.formlyFieldBase.getInputBase('ID', 'ID', true, true)];

        for (let option of widgetTypeBase.options) {
            if (option.hasOwnProperty('choices')) {
                let newSelectField = this.formlyFieldBase.getSelectBase(option.type, option.heading, true, false);
                for (let choice of option.choices) {
                    newSelectField.templateOptions.options.push({label: choice.name, value: choice.type});
                }
                this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, newSelectField];
            } else {
                let newTextField = this.formlyFieldBase.getInputBase(option.type, option.heading, true, false);
                this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, newTextField];
            }
        }

        let chartSizeField = this.formlyFieldBase.getSelectBase('size', 'Size', true, false);

        //append sizes to size option formly field
        for (let size of this.layoutFetcher.availableSizes) {
            chartSizeField.templateOptions.options.push({label: size.description, value: JSON.stringify(size.size)});
        }
        this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, chartSizeField];

        let chartTimeField = this.formlyFieldBase.getSelectBase('timeSpan', 'Timespan', true, false);

        for (let span of this.layoutFetcher.availableTimespans) {
            chartTimeField.templateOptions.options.push({label: span.value, value: span.key});
        }
        this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, chartTimeField];

        for (let size of this.layoutFetcher.availableSizes) {
            if(_.isEqual(size.size, widgetData.size)) {
                this.widgetSettingsFormModel.size = JSON.stringify(size.size);
            }
        }
    };

    /**
     * Opens the Accept Widget Action modal and sets its callback function.
     * @param callback
     * @param widgetData
     */
    openAcceptWidgetActionModal = (callback: Function, widgetData: any): void => {
        this.acceptWidgetActionModalArgument = widgetData;
        this.ngxSmartModalService.setModalData(callback,'acceptWidgetActionModal', true);
        this.ngxSmartModalService.getModal('acceptWidgetActionModal').open(true);
    };

    /**
     * Resets the Accept Widget Action modal.
     */
    resetAcceptWidgetActionModal = (): void => {
        this.acceptWidgetActionModalArgument = {};
        this.ngxSmartModalService.getModal('acceptWidgetActionModal').removeData();
    };

    /**
     * Executes the callback, assigned to the Accept Widget Action modal.
     * @param callback
     */
    executeAcceptWidgetActionModalFunction = (callback: Function): void => {
        callback(this.acceptWidgetActionModalArgument);
        this.ngxSmartModalService.getModal('acceptWidgetActionModal').close();
    };

    /**
     * Saves widget settings.
     * @param widgetData
     */
    saveWidgetSettings = (widgetData: any): void => {
        delete widgetData.widgetName;

        widgetData.size = JSON.parse(widgetData.size);

        let index = 0;
        for (let widget of this.widgetLayout) {
            if (widget.ID === widgetData.ID) {
                this.widgetLayout.splice(index, 1);
                this.widgetLayout.splice(index, 0, widgetData);
                widget = widgetData;
                this.toastr.success("Widget settings successfully changed!", "Success!");
            }
            index++;
        }

        this.layoutFetcher.setLayout(this.currentDashboardID, this.widgetLayout);
        this.ngxSmartModalService.get("widgetSettingsModal").close();
        this.router.navigate(["dashboard", this.currentDashboardID]);
    };

    /**
     * Resets WidgetSettings modal.
     */
    resetWidgetSettingsModal = (): void => {
        this.widgetSettingsForm = new FormGroup({});
        this.widgetSettingsModalText = "";
        this.widgetSettingsFormFields = [];
        this.widgetSettingsFormModel = {};
    };

    /**
     * Deletes a dashboard layout.
     */
    deleteDashboard = (dashboardID: string): void => {
        this.layoutFetcher.deleteLayout(dashboardID);
        this.toastr.success('Dashboard layout was removed', 'Success!');
        this.router.navigate(['home']);
    };
}
