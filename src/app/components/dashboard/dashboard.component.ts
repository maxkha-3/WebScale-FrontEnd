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

    public widgetSettingsForm: FormGroup;
    public widgetSettingsFormModel: any;
    public widgetSettingsFormFields: FormlyFieldConfig[];

    constructor(private global: GlobalService, private route: ActivatedRoute, private router: Router, private layoutFetcher: LayoutFetchingService,
                private toastr: ToastrService, public ngxSmartModalService: NgxSmartModalService, private formlyFieldBase: FormlyFieldBaseService) {
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
                this.widgetLayout = this.layoutFetcher.getLayout(_.camelCase(this.currentDashboard));
                this.validWidgets = this.layoutFetcher.availableWidgets;
                if (this.widgetLayout == null) {
                    this.router.navigate(['home']);
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
    }

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

        //Triggers redrawing of the grid
        window.dispatchEvent(new Event('resize'));
    };

    /**
     * Adds a widget to the dashboard layout and redraws it by reloading the component.
     * @param widgetProperties
     * @param widgetType
     */
    addNewWidget = (widgetProperties: any, widgetType: string) => {
        widgetProperties.widgetType = widgetType;
        widgetProperties.ID = UUID.UUID();
        this.widgetLayout.push(widgetProperties);
        this.toastr.success("New widget was added!", "Success!");
        this.layoutFetcher.setLayout(this.currentDashboardID, this.widgetLayout);
        this.ngxSmartModalService.get("newWidgetModal").close();
        this.router.navigate(["dashboard", this.currentDashboardID]);
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
        this.newWidgetFormModel = {size: 6};        //set medium size as default
    };

    /**
     * Updates newWidgetForm according to the chosen widget type.
     * @param widgetProperties
     */
    selectNewWidget = (widgetTypeBase: any): void => {
        this.resetNewWidgetModal();
        this.newWidgetModalText = "Add new widget (" + widgetTypeBase.widgetName + ")";
        this.selectedNewWidget = widgetTypeBase;

        let chartSizeField = this.formlyFieldBase.getSelectBase('size', 'Size', true, false);

        //append sizes to size option formly field
        for (let size of this.layoutFetcher.availableSizes) {
            chartSizeField.templateOptions.options.push({label: size.description, value: size.size});
        }
        this.newWidgetFormFields = [...this.newWidgetFormFields, chartSizeField];

        if (widgetTypeBase.hasOwnProperty("chartTypes")) {
            let chartTypeField = this.formlyFieldBase.getSelectBase('chartType', 'Chart Type', true, false);

            //append chart types to the select formly field
            for (let chartType of widgetTypeBase.chartTypes) {
                chartTypeField.templateOptions.options.push({label: _.startCase(chartType), value: chartType});
            }

            //append to the formFields object
            this.newWidgetFormFields = [...this.newWidgetFormFields, chartTypeField];
        }

        if (widgetTypeBase.hasOwnProperty("dependencies")) {
            //append dependencies to the form object
            for (let dependencyType of widgetTypeBase.dependencies) {
                let dependency = this.layoutFetcher.getDependency(dependencyType);
                let dependencyField = this.formlyFieldBase.getInputBase(dependency.dependencyType, dependency.dependencyName, true, false);

                //append to the formFields object
                this.newWidgetFormFields = [...this.newWidgetFormFields, dependencyField];
            }
        }
    };

    /**
     * Sets a form for widget settings.
     * @param widgetData
     */
    setWidgetSettingsModal = (widgetData: any): void => {
        //this.widgetSettingsDefaultData = widgetData;
        this.widgetSettingsFormModel = {...widgetData};

        let widgetTypeBase;
        for (let widget of this.layoutFetcher.availableWidgets) {
            if (widget.widgetType === widgetData.widgetType) {
                widgetTypeBase = widget;
            }
        }
        this.widgetSettingsFormModel.widgetName = widgetTypeBase.widgetName;

        this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, this.formlyFieldBase.getInputBase('widgetName', 'Widget Type', true, true)];
        this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, this.formlyFieldBase.getInputBase('ID', 'ID', true, true)];

        if (widgetTypeBase.hasOwnProperty("chartTypes")) {
            let chartTypeField = this.formlyFieldBase.getSelectBase('chartType', 'Chart Type', true, false);

            //append chart types to the select formly field
            for (let chartType of widgetTypeBase.chartTypes) {
                chartTypeField.templateOptions.options.push({label: _.startCase(chartType), value: chartType});
            }

            //append to the formFields object
            this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, chartTypeField];
        }

        let chartSizeField = this.formlyFieldBase.getSelectBase('size', 'Size', true, false);

        //append sizes to size option formly field
        for (let size of this.layoutFetcher.availableSizes) {
            chartSizeField.templateOptions.options.push({label: size.description, value: size.size});
        }
        this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, chartSizeField];

        if (widgetTypeBase.hasOwnProperty("dependencies")) {
            //append dependencies to the form object
            for (let dependencyType of widgetTypeBase.dependencies) {
                let dependency = this.layoutFetcher.getDependency(dependencyType);
                let dependencyField = this.formlyFieldBase.getInputBase(dependency.dependencyType, dependency.dependencyName, true, false);

                //append to the formFields object
                this.widgetSettingsFormFields = [...this.widgetSettingsFormFields, dependencyField];
            }
        }
    };

    /**
     * Saves widget settings.
     * @param widgetData
     */
    saveWidgetSettings = (widgetData: any) => {
        delete widgetData.widgetName;

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
    resetWidgetSettingsModal = () => {
        this.widgetSettingsFormFields = [];
        this.widgetSettingsFormModel = {};
    };

    /**
     * Deletes a dashboard layout.
     */
    deleteDashboard = (): void => {
        this.layoutFetcher.deleteLayout(this.currentDashboardID);
        this.toastr.success('Dashboard layout was removed', 'Success!');
        this.router.navigate(['home']);
    };
}
