export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly products: [{
    productId: number
  }];
}
