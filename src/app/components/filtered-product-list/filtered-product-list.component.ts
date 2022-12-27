import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {map, combineLatest, Observable, Subject} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filtered-product-list',
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.category$
  ]).pipe(map(([products, category]: [ProductModel[], string]) => {
    return products.filter(product => product.category === category)
  }));

  constructor(private _categoriesService: CategoriesService, private _productsService: ProductsService) {
  }

  selectCategory(category: string): void {
    this._categorySubject.next(category)

  }
}
