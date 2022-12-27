import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  readonly list$: Observable<UserModel[]> = this._userService.getAll();
  private _selectedUserIdSubject: Subject<number> = new Subject<number>();
  public selectedUserId$: Observable<number> = this._selectedUserIdSubject.asObservable();
  readonly details$: Observable<UserModel> = this.selectedUserId$.pipe(
    switchMap(data => this._userService.getOne(data)));

  constructor(private _userService: UserService) {
  }

  selectUser(id: number): void {
    this._selectedUserIdSubject.next(id)
  }
}
