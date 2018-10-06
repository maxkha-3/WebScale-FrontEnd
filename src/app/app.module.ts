import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Router path template
const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent}];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
