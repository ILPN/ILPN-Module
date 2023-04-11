import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExternalRedirectHookGuard} from 'ilpn-components';
import {AppComponent} from './app.component';


const routes: Routes = [
    // paths handled by this single-page app belong at the top
    {path: '', component: AppComponent},
    // The external redirect hook, bypasses the router and forces a browser redirect to a relative URL, effectively leaving this site
    {path: '**', canActivate: [ExternalRedirectHookGuard], redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
