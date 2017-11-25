import {AuthState} from '../state/index';
import {createSelector} from '@ngrx/store';

// TODO: rewrite to proper selector
export const getAuthPending = createSelector((state: AuthState) => state.pending, pending => pending);
