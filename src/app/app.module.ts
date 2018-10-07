import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgxSmoothDnDModule} from 'ngx-smooth-dnd';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';


import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {WidgetComponent} from './components/widget/widget.component';
import {SettingsComponent} from './components/settings/settings.component';

import {FormlyHorizontalWrapper} from './formly/wrappers/horizontal-wrapper';

//Router path template
const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'settings', component: SettingsComponent}];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavbarComponent,
        WidgetComponent,
        SettingsComponent,
        FormlyHorizontalWrapper
    ],
    imports: [
        BrowserModule,
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
