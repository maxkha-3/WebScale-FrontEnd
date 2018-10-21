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
import {ModalDialogModule} from 'ngx-modal-dialog';

//Components
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SettingsComponent} from './components/settings/settings.component';

//Directives
import {WidgetComponent} from './directives/widget/widget.component';

//Modal components
import {NewDashboardModalComponent} from './modals/new-dashboard-modal';

//Formly Wrappers
import {FormlyHorizontalWrapper} from './formly/wrappers/horizontal-wrapper';

//Services
import {GlobalService} from './services/global-service/global.service';
import {LayoutFetchingService} from './services/layout-fetching-service/layout-fetching.service';
import {MiscService} from './services/misc-service/misc.service';
import {DruidDataService} from './services/druid-data-service/druid-data.service';
import {ChartBaseService} from './services/chart-base-service/chart-base.service';


//Router path template
const appRoutes: Routes = [
    {path: 'dashboard/:id', component: DashboardComponent},
    {path: 'settings', component: SettingsComponent}];

@NgModule({
    declarations: [
        AppComponent,
        WidgetComponent,
        SettingsComponent,
        DashboardComponent,
        FormlyHorizontalWrapper,
        NewDashboardModalComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ChartModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
            wrappers: [{name: 'form-field-horizontal', component: FormlyHorizontalWrapper}],
            validationMessages: [
                {name: 'required', message: 'This field is required'},
            ],
        }),
        FormlyBootstrapModule,
        ModalDialogModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    entryComponents: [
        NewDashboardModalComponent
    ],
    providers: [
        GlobalService,
        LayoutFetchingService,
        DruidDataService,
        MiscService,
        ChartBaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
