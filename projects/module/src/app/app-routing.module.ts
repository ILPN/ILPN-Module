import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExternalRedirectHookGuard} from 'ilpn-components';
import {AppComponent} from './app.component';


const routes: Routes = [
    {path: '', component: AppComponent},
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
