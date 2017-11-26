import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as authState from '../state/auth';

export const getAuthState = createFeatureSelector<authState.AuthState>('auth');
export const getAuthPending = createSelector(getAuthState, (state: authState.AuthState) => state.pending);
export const getAuthLoggedIn = createSelector(getAuthState, (state: authState.AuthState) => state.loggedIn);




