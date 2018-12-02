//Imported libraries
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {ChartModule} from 'primeng/chart';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ToastrModule} from 'ngx-toastr';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {UUID} from 'angular2-uuid';
import {HttpClientModule} from '@angular/common/http';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';

//Components
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SettingsComponent} from './components/settings/settings.component';
import {HomeComponent} from './components/home/home.component';
import {InstanceOverviewComponent} from './components/instance-overview/instance-overview.component';
import {ServerErrorComponent} from './components/server-error/server-error.component';
import { WidgetGeoComponent } from './directives/widget-geo/widget-geo.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {MonitorOverviewComponent} from './components/instance-overview/monitor-overview/monitor-overview.component';
import {TaskOverviewComponent} from './components/instance-overview/task-overview/task-overview.component';
import {StreamOverviewComponent} from './components/instance-overview/stream-overview/stream-overview.component';

//Directives
import {WidgetComponent} from './directives/widget/widget.component';
import {WidgetListComponent} from './directives/widget-list/widget-list.component';

//Formly Wrappers
import {FormlyHorizontalWrapper} from './formly/wrappers/horizontal-wrapper';

import {APP_BASE_HREF} from '@angular/common';

//Services
import {GlobalService} from './services/global-service/global.service';
import {LayoutFetchingService} from './services/layout-fetching-service/layout-fetching.service';
import {MiscService} from './services/misc-service/misc.service';
import {DruidDataService} from './services/druid-data-service/druid-data.service';
import {ChartBaseService} from './services/chart-base-service/chart-base.service';
import {FormlyFieldBaseService} from './formly/field-bases/formly-field-base.service';
import {EventServerService} from './services/event-server-service/event-server.service';
import {DummyDataService} from './services/dummy-data.service';

//Router path template
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'dashboard/:id', component: DashboardComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'monitoring/:sourceType', component: InstanceOverviewComponent},
    {path: 'monitoring/monitors/:id', component: MonitorOverviewComponent},
    {path: 'monitoring/tasks/:id', component: TaskOverviewComponent},
    {path: 'monitoring/streams/:id', component: StreamOverviewComponent},
    {path: 'serverError', component: ServerErrorComponent},
    {path: 'notifications', component: NotificationsComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        WidgetComponent,
        SettingsComponent,
        DashboardComponent,
        FormlyHorizontalWrapper,
        HomeComponent,
        WidgetListComponent,
        InstanceOverviewComponent,
        ServerErrorComponent,
        WidgetGeoComponent,
        ServerErrorComponent,
        NotificationsComponent,
        MonitorOverviewComponent,
        TaskOverviewComponent,
        StreamOverviewComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ChartModule,
        NgxChartsModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyBootstrapModule,
        HttpClientModule,
        LeafletModule.forRoot(),
        LeafletMarkerClusterModule.forRoot(),
        NgxSmartModalModule.forRoot(),
        FormlyModule.forRoot({
            wrappers: [{name: 'form-field-horizontal', component: FormlyHorizontalWrapper}],
            validationMessages: [
                {name: 'required', message: 'This field is required'}
            ],
        }),
        ToastrModule.forRoot(),
        RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
    ],
    entryComponents: [],
    providers: [
        DummyDataService,
        GlobalService,
        LayoutFetchingService,
        DruidDataService,
        MiscService,
        ChartBaseService,
        FormlyFieldBaseService,
        EventServerService,
        UUID,
        {provide: APP_BASE_HREF, useValue: '/'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
