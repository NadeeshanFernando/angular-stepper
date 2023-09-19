import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './menu/main/main.component';
import {LoginComponent} from './pages/login/login.component';
import {HeaderComponent} from './menu/main/header/header.component';
import {FooterComponent} from './menu/main/footer/footer.component';
import {MenuSidebarComponent} from './menu/main/menu-sidebar/menu-sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from '@pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './pages/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {MessagesComponent} from './menu/main/header/messages/messages.component';
import {NotificationsComponent} from './menu/main/header/notifications/notifications.component';

import {CommonModule, registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserComponent} from './menu/main/header/user/user.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from './pages/recover-password/recover-password.component';
import {MenuItemComponent} from './menu/menu-item/menu-item.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/auth/reducer';
import {uiReducer} from './store/ui/reducer';
import {ProfabricComponentsModule} from '@profabric/angular-components';
import {SidebarSearchComponent} from './menu/sidebar-search/sidebar-search.component';
import { BasicDetailsFormComponent } from './user-management/onboard/basic-details-form/basic-details-form.component';
import { OnboardFormsTabComponent } from './user-management/onboard/onboard-forms-tab/onboard-forms-tab.component';
import { SystemAccessFormComponent } from './user-management/onboard/system-access-form/system-access-form.component';
import { OtherSupportFormComponent } from './user-management/onboard/other-support-form/other-support-form.component';
import { ApplicationUserAccessFormComponent } from './user-management/onboard/application-user-access-form/application-user-access-form.component';

import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CommonSuccessComponent } from './success_messages/common-success/common-success.component';
import { MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,
        MessagesComponent,
        NotificationsComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        MenuItemComponent,
        SidebarSearchComponent,
        BasicDetailsFormComponent,
        SystemAccessFormComponent,
        OnboardFormsTabComponent,
        SystemAccessFormComponent,
        OtherSupportFormComponent,
        ApplicationUserAccessFormComponent,
        CommonSuccessComponent,
    ],
    imports: [
        ProfabricComponentsModule,
        CommonModule,
        MatStepperModule,
        MatOptionModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        BrowserModule,
        StoreModule.forRoot({auth: authReducer, ui: uiReducer}),
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
