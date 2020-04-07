import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { CurrencyFormComponent } from './currency/currency-form/currency-form.component';
import { CurrencyListComponent } from './currency/currency-list/currency-list.component';
import { CurrencyItemComponent } from './currency/currency-item/currency-item.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'currencyform',
        component: CurrencyFormComponent,
      },
      {
        path: 'currencylist',
        component: CurrencyListComponent,
      },
      {
        path: 'currencyitem',
        component: CurrencyItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
