import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CategoriesCheckboxComponent } from './components/categories-checkbox/categories-checkbox.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoriesCheckboxComponentModule } from './components/categories-checkbox/categories-checkbox.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products',
    component: ProductListComponent
  }, {
    path: 'categories',
    component: CategoriesListComponent
  }, {
    path: 'crypto',
    component: CryptoChipsComponent
  }, {
    path: 'public-holidays',
    component: PublicHolidaysComponent },
    { path:
        'checkbox-categories',
      component: CategoriesCheckboxComponent
    }]), ProductListComponentModule,
    ProductsServiceModule,
    CategoriesListComponentModule,
    CategoriesServiceModule,
    CryptoChipsComponentModule,
    CryptoChipsServiceModule,
    PublicHolidaysComponentModule,
    PublicHolidaysServiceModule,
    CategoriesCheckboxComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
