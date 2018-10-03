import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { NavbarDirective } from './directives/navbar/navbar.directive';

//Router path template
const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent}];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavbarDirective
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
