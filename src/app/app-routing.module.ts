import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredListComponent } from './components/filtered-list/filtered-list.component';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CryptoCurrencyComponent } from './components/crypto-currency/crypto-currency.component';
import { FilteredListComponentModule } from './components/filtered-list/filtered-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductsServiceModule } from './services/products.service-module';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { EmployeesListComponentModule } from './components/employees-list/employees-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { UserListComponentModule } from './components/user-list/user-list.component-module';
import { UserServiceModule } from './services/user.service-module';
import { CryptoCurrencyComponentModule } from './components/crypto-currency/crypto-currency.component-module';
import { CryptoCurrencyServiceModule } from './services/crypto-currency.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products/:category', component: FilteredListComponent },
    { path: 'products', component: FilteredProductListComponent },
    { path: 'sorted-products', component: SortedProductListComponent },
    { path: 'employee-list', component: EmployeesListComponent },
    { path: 'products-master-details', component: ProductListComponent },
    { path: 'employees-master-details', component: UserListComponent },
    { path: 'crypto-master-details', component: CryptoCurrencyComponent }
  ]), FilteredListComponentModule, CategoriesServiceModule, ProductsServiceModule, FilteredProductListComponentModule, SortedProductListComponentModule, EmployeesListComponentModule, EmployeeServiceModule, ProductListComponentModule, UserListComponentModule, UserServiceModule, CryptoCurrencyComponentModule, CryptoCurrencyServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
