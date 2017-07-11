import { Inject, Injectable } from '@angular/core';
import { ActionReducer, Action } from '@ngrx/store';
@Injectable()
export class chrysalisConfig {
  NORMAL = 'Normal';
  COLLAPSED = 'Collapsed';
  layoutSize = {
    widthCollapseSidebar: 750,
    widthHideSidebar: 500
  };
}
