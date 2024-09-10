import {
  authSliceReducer,
  registerUser,
  resendActivationEmail,
  activateUser,
  loginUser,
  passwordReset,
  getEmailByUID,
  resetPasswordConfirm,
} from './authSlice';

describe('authSlice register and activation reducer', () => {
  const initialState = {
    userName: null,
    userEmail: null,
    userPhone: null,
    userId: null,
    isSending: false,
    sendDataSucces: false,
    registerSucces: false,
    registerError: null,
    activateSucces: false,
    activateError: null,
    loginSucces: false,
    loginError: null,
    getEmailByUIDSucces: false,
    emailByUID: null,
    passwordResetSucces: false,
    passwordResetError: null,
    passwordResetConfirm: false,
    tokens: {
      refresh: null,
      access: null,
    },
    isAuthorized: false,
  };

  it('should handle initial state', () => {
    const nextState = authSliceReducer(undefined, { type: 'unknown-action' });
    expect(nextState).toEqual(initialState);
  });

  it('should handle registerUser.pending', () => {
    const nextState = authSliceReducer(initialState, registerUser.pending);
    expect(nextState.isSending).toBe(true);
    expect(nextState.registerError).toBe(null);
  });

  it('should handle registerUser.fulfilled', () => {
    const payload = {
      first_name: 'John',
      email: 'john@example.com',
      id: 1,
      phone: '123-456-7890',
    };

    const nextState = authSliceReducer(initialState, registerUser.fulfilled(payload));

    // Check the updated state based on the fulfilled action
    expect(nextState.isSending).toBe(false);
    expect(nextState.registerError).toBe(false);
    expect(nextState.sendDataSucces).toBe(true);
    expect(nextState.userName).toBe(payload.first_name);
    expect(nextState.userEmail).toBe(payload.email);
    expect(nextState.userId).toBe(payload.id);
    expect(nextState.userPhone).toBe(payload.phone);
  });

  it('should handle registerUser.rejected', () => {
    const error = { message: 'Registration failed' };
    const nextState = authSliceReducer(initialState, registerUser.rejected(error));
    expect(nextState.isSending).toBe(false);
    expect(nextState.sendDataSucces).toBe(false);
    expect(nextState.registerError).toBe(true);
    // Check how you want to handle error details in your state
  });

  // Add similar tests for other actions (resendActivationEmail, activateUser, loginUser, etc.)
  it('should handle activateUser.fulfilled', () => {
    const nextState = authSliceReducer(initialState, activateUser.fulfilled());
    // Check the updated state based on the fulfilled action
    expect(nextState.activateSucces).toBe(true);
    expect(nextState.activateError).toBe(false);
  });

  it('should handle activateUser.rejected', () => {
    const error = { message: 'Activation failed' };
    const nextState = authSliceReducer(initialState, activateUser.rejected(error));
    expect(nextState.activateSucces).toBe(false);
    expect(nextState.activateError).toBe(true);
  });
});

describe('authSlice login reducer', () => {
  const initialState = {
  };

  it('should handle loginUser.fulfilled', () => {
    const nextState = authSliceReducer(initialState, loginUser.fulfilled());
    // Check the updated state based on the fulfilled action
    expect(nextState.loginSucces).toBe(true);
    expect(nextState.loginError).toBe(false);
  });

  it('should handle loginUser.rejected', () => {
    const error = { message: 'Login failed' };
    const nextState = authSliceReducer(initialState, loginUser.rejected(error));
    expect(nextState.loginSucces).toBe(false);
    expect(nextState.loginError).toBe(true);
  });

  it('should handle getEmailByUID.fulfilled', () => {
    const payload = {
      email: 'john@example.com',
    };
    const nextState = authSliceReducer(initialState, getEmailByUID.fulfilled(payload));
    // Check the updated state based on the fulfilled action
    expect(nextState.getEmailByUIDSucces).toBe(true);
    expect(nextState.emailByUID).toBe(payload.email);
    expect(nextState.activateError).toBe(false);
  });
});

describe('authSlice reset password reducer', () => {
  const initialState = {
  };
  it('should handle passwordReset.fulfilled', () => {
    const nextState = authSliceReducer(initialState, passwordReset.fulfilled());
    // Check the updated state based on the fulfilled action
    expect(nextState.passwordResetSucces).toBe(true);
    expect(nextState.passwordResetError).toBe(false);
  });

  it('should handle passwordReset.rejected', () => {
    const error = { message: 'Acount is not found' };
    const nextState = authSliceReducer(initialState, passwordReset.rejected(error));
    expect(nextState.passwordResetSucces).toBe(false);
    expect(nextState.passwordResetError).toBe(true);
  });

  it('should handle resetPasswordConfirm.fulfilled', () => {
    const nextState = authSliceReducer(initialState, resetPasswordConfirm.fulfilled());
    // Check the updated state based on the fulfilled action
    expect(nextState.passwordResetConfirm).toBe(true);
  });
});
