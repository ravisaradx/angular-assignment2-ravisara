import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DemographicComponent } from './demographic/demographic.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'demographic',
        component: DemographicComponent
    }
];
