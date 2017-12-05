import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.state';

export const getAuthState = createFeatureSelector<AuthState>('auth');
export const getAuthPending = createSelector(getAuthState, (state: AuthState) => state.pending);
export const getAuthLoggedIn = createSelector(getAuthState, (state: AuthState) => state.loggedIn);
export const getAuthError = createSelector(getAuthState, (state: AuthState) => state.error);
