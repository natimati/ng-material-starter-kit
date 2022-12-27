import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoCurrencyModel } from '../../models/crypto-currency.model';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoCurrencyComponent {
  readonly list$: Observable<CryptoCurrencyModel[]> = this._cryptoCurrencyService.getAll();
  private _detailsSubject: Subject<CryptoCurrencyModel> = new Subject<CryptoCurrencyModel>();
  public details$: Observable<CryptoCurrencyModel> = this._detailsSubject.asObservable();

  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {
  }

  selectCryptoCurrencySymbol(cryptoCurrency: CryptoCurrencyModel): void {
    this._detailsSubject.next(cryptoCurrency)
  }
}
