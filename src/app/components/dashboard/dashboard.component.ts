import {Component, OnInit, AfterViewInit} from '@angular/core';
import {GlobalService} from '../../services/global-service/global.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutFetchingService} from '../../services/layout-fetching-service/layout-fetching.service';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

import * as _ from 'lodash';
import * as Muuri from 'muuri';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {FormlyFieldBaseService} from '../../formly/field-bases/formly-field-base.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    public currentDashboard: string;
    public currentDashboardID: string;

    public newWidgetModalText: string;

    public widgetLayout: Array<any>;
    public widgetGrid: any;

    public validWidgets: any;
    public selectedNewWidget: any;

    public newWidgetForm = new FormGroup({});
    public newWidgetFormModel: any = {};
    public newWidgetFormFields: FormlyFieldConfig[] = [];

    constructor(private global: GlobalService, private route: ActivatedRoute, private router: Router, private layoutFetcher: LayoutFetchingService,
                private toastr: ToastrService, public ngxSmartModalService: NgxSmartModalService, private formlyFieldBase: FormlyFieldBaseService) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
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
     * Removes widget from a dashoard layout.
     * @param widgetData
     */
    removeWidget = (widgetData: any) => {
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
        this.widgetLayout.push(widgetProperties);
        this.toastr.success("New widget was added!", "Success!");
        this.layoutFetcher.setLayout(this.currentDashboardID, this.widgetLayout);
        this.ngxSmartModalService.get("newWidgetModal").close();
        this.router.navigate(["dashboard", this.currentDashboardID]);
    };

    /**
     * Opens New Widget modal.
     */
    openNewWidgetModal = () => {
        this.ngxSmartModalService.get('newWidgetModal').open();
        this.newWidgetModalText = "Add new widget";
    };

    /**
     * Triggers, when New Widget modal is closed.
     */
    resetNewWidgetModal = () => {
        this.selectedNewWidget = undefined;
        this.newWidgetFormFields = [];
        this.newWidgetFormModel = {};
    };

    /**
     * Updates newWidgetForm according to the chosen widget type.
     * @param widgetProperties
     */
    selectNewWidget = (widgetProperties: any) => {
        this.resetNewWidgetModal();
        this.newWidgetModalText = "Add new widget (" + widgetProperties.widgetName + ")";
        this.selectedNewWidget = widgetProperties;
        if (widgetProperties.hasOwnProperty("chartTypes")) {
            let chartTypeField = this.formlyFieldBase.getSelectBase('chartType', 'Chart Type', true);

            //append chart types to the select formly field
            for (let chartType of widgetProperties.chartTypes) {
                chartTypeField.templateOptions.options.push({label: _.startCase(chartType), value: chartType});
            }

            //append to the formFields object
            this.newWidgetFormFields = [...this.newWidgetFormFields, chartTypeField];
        }

        if (widgetProperties.hasOwnProperty("dependencies")) {
            //append dependencies to the form object
            for (let dependencyType of widgetProperties.dependencies) {
                let dependency = this.layoutFetcher.getDependency(dependencyType);
                let dependencyField = this.formlyFieldBase.getInputBase(dependency.dependencyType, dependency.dependencyName, true);

                //append to the formFields object
                this.newWidgetFormFields = [...this.newWidgetFormFields, dependencyField];
            }
        }
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
