import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as authState from './auth.state';

export const getAuthState = createFeatureSelector<authState.AuthState>('auth');
export const getAuthPending = createSelector(getAuthState, (state: authState.AuthState) => state.pending);
export const getAuthLoggedIn = createSelector(getAuthState, (state: authState.AuthState) => state.loggedIn);
export const getAuthError = createSelector(getAuthState, (state: authState.AuthState) => state.error);




