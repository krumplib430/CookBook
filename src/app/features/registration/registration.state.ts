export interface RegistrationState {
  pending: boolean;
  error: string;
}

export const initialState: RegistrationState = {
  pending: false,
  error: null,
};
