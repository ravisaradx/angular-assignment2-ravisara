import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DemographicComponent } from './demographic/demographic.component';
import { TestAttributeDirectiveComponent } from './test-attribute-directive/test-attribute-directive.component';
import { TestStructuralDirectiveComponent } from './test-structural-directive/test-structural-directive.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'demographic',
        component: DemographicComponent
    },
    {
        path:'test-attribute-directive',
        component: TestAttributeDirectiveComponent
    },
    {
        path:'test-structural-directive',
        component: TestStructuralDirectiveComponent
    },
    {
        path: 'test-pipe',
        component: TestPipeComponent
    }
];
