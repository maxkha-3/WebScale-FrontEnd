//Imported libraries
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgxSmoothDnDModule} from 'ngx-smooth-dnd';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {ChartModule} from 'primeng/chart';

//Components
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MuuriDashboardComponent} from './components/muuri-dashboard/muuri-dashboard.component';
import {SettingsComponent} from './components/settings/settings.component';

//Directives
import {WidgetComponent} from './directives/widget/widget.component';

//Formly Wrappers
import {FormlyHorizontalWrapper} from './formly/wrappers/horizontal-wrapper';

//Services
import {GlobalService} from './services/global-service/global.service';
import {LayoutFetchingService} from './services/layout-fetching-service/layout-fetching.service';
import {MiscService} from './services/misc-service/misc.service';


//Router path template
const appRoutes: Routes = [
    {path: 'dashboard/:id', component: DashboardComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'muuri', component: MuuriDashboardComponent}];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        WidgetComponent,
        SettingsComponent,
        FormlyHorizontalWrapper,
        MuuriDashboardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ChartModule,
        FormsModule,
        NgxSmoothDnDModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
            wrappers: [{name: 'form-field-horizontal', component: FormlyHorizontalWrapper}],
            validationMessages: [
                {name: 'required', message: 'This field is required'},
            ],
        }),
        FormlyBootstrapModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        GlobalService,
        LayoutFetchingService,
        MiscService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
