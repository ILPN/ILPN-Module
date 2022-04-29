import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {IlpnComponentsModule} from 'ilpn-components';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        IlpnComponentsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
