import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RegistrationState} from './registration.state';

export const getRegistrationState = createFeatureSelector<RegistrationState>('registration');
export const getRegistrationPending = createSelector(getRegistrationState, (state: RegistrationState) => state.pending);
export const getRegistrationError = createSelector(getRegistrationState, (state: RegistrationState) => state.error);
