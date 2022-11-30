import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NameNationalityService } from '../../services/name-nationality.service';
import {NameNationalityModel} from "../../models/name-nationality.model";

@Component({
  selector: 'app-user-nationality',
  templateUrl: './user-nationality.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserNationalityComponent {
  readonly userNationality$: Observable<NameNationalityModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._nameNationalityService.getOne(data['name'])));


  constructor(private _activatedRoute: ActivatedRoute, private _nameNationalityService: NameNationalityService) {
  }
}
