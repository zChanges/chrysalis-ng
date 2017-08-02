import { Inject, Injectable, ViewContainerRef } from '@angular/core';
import { ActionReducer, Action } from '@ngrx/store';
@Injectable()
export class chrysalisConfig {
  rootContainer: ViewContainerRef;
  NORMAL = 'Normal';
  COLLAPSED = 'Collapsed';
  layoutSize = {
    widthCollapseSidebar: 750,
    widthHideSidebar: 500
  };
}



/**
 * ch-autoComplete config
 */
export const DOWN_ARROW = 40;
export const UP_ARROW = 38;
export const ESCAPE = 27;
export const ENTER = 13;

export class autocompleteItms {
  text: string;
  value: string;
  constructor(data: any, textKey: string | Array<any>, valueKey: string) {
    if (typeof data === 'string') {
      this.text = this.value = data;
    }

    if (typeof data === 'object') {
      if (typeof textKey === 'string') {
        this.text = data[textKey];
      }

      // if (textKey instanceof Array) {
      //   this.text = data
      // }
      this.value = data[valueKey];

    }
  }
}



