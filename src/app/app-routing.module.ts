import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './menu/main/main.component';
import {LoginComponent} from '@pages/login/login.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {RegisterComponent} from '@pages/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {MyAuthGuard} from '@guards/my-auth.guard';
import {ForgotPasswordComponent} from '@pages/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@pages/recover-password/recover-password.component';
import { BasicDetailsFormComponent } from './user-management/onboard/basic-details-form/basic-details-form.component';
import { SystemAccessFormComponent } from './user-management/onboard/system-access-form/system-access-form.component';
import { OnboardFormsTabComponent } from './user-management/onboard/onboard-forms-tab/onboard-forms-tab.component';
import { OtherSupportFormComponent } from './user-management/onboard/other-support-form/other-support-form.component';
import { ApplicationUserAccessFormComponent } from './user-management/onboard/application-user-access-form/application-user-access-form.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [MyAuthGuard],
        canActivateChild: [MyAuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            // {
            //     path: 'blank',
            //     component: BlankComponent
            // },
            {
                path: 'basic-details-form',
                component: BasicDetailsFormComponent
            },
            {
                path: 'system-access-form',
                component: SystemAccessFormComponent
            },
            {
                path: 'application-user-access-form',
                component: ApplicationUserAccessFormComponent
            },
            {
                path: 'other-support-form',
                component: OtherSupportFormComponent
            },
            {
                path: 'onboard-forms-tab',
                component: OnboardFormsTabComponent
            },
            {
                path: '',
                component: DashboardComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
