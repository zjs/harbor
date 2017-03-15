import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CookieService } from 'angular2-cookie/core';

import { SessionService } from '../shared/session.service';
import { MessageComponent } from '../global-message/message.component';

import { MessageService } from '../global-message/message.service';
import { MaxLengthExtValidatorDirective } from './max-length-ext.directive';
import { FilterComponent } from './filter/filter.component';
import { HarborActionOverflow } from './harbor-action-overflow/harbor-action-overflow';
import { TranslateModule } from "@ngx-translate/core";

import { RouterModule } from '@angular/router';

import { DeletionDialogComponent } from './deletion-dialog/deletion-dialog.component';
import { DeletionDialogService } from './deletion-dialog/deletion-dialog.service';
import { SystemAdminGuard } from './route/system-admin-activate.service';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { InlineAlertComponent } from './inline-alert/inline-alert.component';

import { ListPolicyComponent } from './list-policy/list-policy.component';
import { CreateEditPolicyComponent } from './create-edit-policy/create-edit-policy.component';

import { PortValidatorDirective } from './port.directive';

import { PageNotFoundComponent } from './not-found/not-found.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';

import { AuthCheckGuard } from './route/auth-user-activate.service';

import { StatisticsComponent } from './statictics/statistics.component';
import { StatisticsPanelComponent } from './statictics/statistics-panel.component';
import { SignInGuard } from './route/sign-in-guard-activate.service';
import { ModeGuard } from './route/mode-guard-activate.service';
import { StartGuard } from './route/start-guard-activate.service';

@NgModule({
  imports: [
    CoreModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [
    MessageComponent,
    MaxLengthExtValidatorDirective,
    FilterComponent,
    HarborActionOverflow,
    DeletionDialogComponent,
    NewUserFormComponent,
    InlineAlertComponent,
    ListPolicyComponent,
    CreateEditPolicyComponent,
    PortValidatorDirective,
    PageNotFoundComponent,
    AboutDialogComponent,
    StatisticsComponent,
    StatisticsPanelComponent
  ],
  exports: [
    CoreModule,
    MessageComponent,
    MaxLengthExtValidatorDirective,
    FilterComponent,
    HarborActionOverflow,
    TranslateModule,
    DeletionDialogComponent,
    NewUserFormComponent,
    InlineAlertComponent,
    ListPolicyComponent,
    CreateEditPolicyComponent,
    PortValidatorDirective,
    PageNotFoundComponent,
    AboutDialogComponent,
    StatisticsComponent,
    StatisticsPanelComponent
  ],
  providers: [
    SessionService,
    MessageService,
    CookieService,
    DeletionDialogService,
    SystemAdminGuard,
    AuthCheckGuard,
    SignInGuard,
    ModeGuard,
    StartGuard]
})
export class SharedModule {

}