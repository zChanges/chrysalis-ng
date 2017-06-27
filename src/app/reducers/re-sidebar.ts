import { ActionReducer, Action } from '@ngrx/store';

export const NORMAL = 'Normal';
export const COLLAPSED = 'Collapsed';

export function sidebarReducer(state: boolean = true, action: Action) {
    switch (action.type) {
        case NORMAL:
            return true;

        case COLLAPSED:
            return false;

        default:
            return state;
    }
}
