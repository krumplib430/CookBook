import {AuthState} from '../state/auth';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getAuthState = createFeatureSelector<AuthState>('auth');
export const getAuthPending = createSelector(getAuthState, (state: AuthState) => state.pending);




