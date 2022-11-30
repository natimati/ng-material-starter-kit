import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartDetailsService } from '../../services/cart-details.service';
import {CartModel} from "../../models/cart.model";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDetailsComponent {
  readonly cartDetails$: Observable<CartModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._cartDetailsService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _cartDetailsService: CartDetailsService) {
  }
}
