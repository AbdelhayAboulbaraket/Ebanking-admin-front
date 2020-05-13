import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { CurrencyFormComponent } from './currency/currency-form/currency-form.component';
import { CurrencyListComponent } from './currency/currency-list/currency-list.component';
import { AgentListComponent } from './agent/agent-list/agent-list.component';
import { AgentFormComponent } from './agent/agent-form/agent-form.component';
import { AgencyListComponent } from './agency/agency-list/agency-list.component';
import { AgencyFormComponent } from './agency/agency-form/agency-form.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'currencyList',
        component: CurrencyListComponent,
      },
      {
        path: 'currencyForm',
        component: CurrencyFormComponent,
      },
      {
        path: 'agentList',
        component: AgentListComponent,
      },
      {
        path: 'agentForm',
        component: AgentFormComponent,
      },
      {
        path: 'agencyList',
        component: AgencyListComponent,
      },
      {
        path: 'agencyForm',
        component: AgencyFormComponent,
      },
      {
        path: 'adminList',
        component: AdminListComponent,
      },
      {
        path: 'adminForm',
        component: AdminFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
