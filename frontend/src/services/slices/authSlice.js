import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

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
};

const registerUser = createAsyncThunk('auth/registerUser', async (data) => {
  try {
    return api.postRegisterUser(data);
  } catch (err) {
    return err;
  }
});

const resendActivationEmail = createAsyncThunk('auth/resendActivation', async (data) => {
  try {
    return api.postResendActivation(data);
  } catch (err) {
    return err;
  }
});

const activateUser = createAsyncThunk('auth/activateUser', async (data) => {
  try {
    return api.postActivateUser(data);
  } catch (err) {
    return err;
  }
});

const loginUser = createAsyncThunk('auth/loginUser', async (data) => {
  try {
    return api.postLoginUser(data);
  } catch (err) {
    return err;
  }
});

const passwordReset = createAsyncThunk('auth/passwordReset', async (data) => {
  try {
    return api.postPasswordReset(data);
  } catch (err) {
    return err;
  }
});

const getEmailByUID = createAsyncThunk('auth/getEmailByUID', async (data) => {
  try {
    return api.getEmailByUID(data);
  } catch (err) {
    return err;
  }
});

const resetPasswordConfirm = createAsyncThunk('auth/resetPasswordConfirm', async (data) => {
  try {
    return api.postResetPasswordConfirm(data);
  } catch (err) {
    return err;
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isSending = true;
      state.registerError = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isSending = false;
      state.registerError = false;
      state.sendDataSucces = true;
      state.userName = action.payload.first_name;
      state.userEmail = action.payload.email;
      state.userId = action.payload.id;
      state.userPhone = action.payload.phone;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isSending = false;
      state.sendDataSucces = false;
      state.registerError = true;
    });
    builder.addCase(activateUser.fulfilled, (state, action) => {
      state.activateSucces = true;
      state.activateError = false;
    });
    builder.addCase(activateUser.rejected, (state, action) => {
      state.activateSucces = false;
      state.activateError = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginSucces = true;
      state.loginError = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginSucces = false;
      state.loginError = true;
    });
    builder.addCase(getEmailByUID.fulfilled, (state, action) => {
      state.getEmailByUIDSucces = true;
      state.emailByUID = action.payload.email;
      state.activateError = false;
    });
    builder.addCase(getEmailByUID.rejected, (state, action) => {
    });
    builder.addCase(passwordReset.fulfilled, (state, action) => {
      state.passwordResetSucces = true;
      state.passwordResetError = false;
    });
    builder.addCase(passwordReset.rejected, (state, action) => {
      state.passwordResetSucces = false;
      state.passwordResetError = true;
    });
    builder.addCase(resetPasswordConfirm.fulfilled, (state, action) => {
      state.passwordResetConfirm = true;
    });
    // [registerUser.pending]: (state) => {
    //   state.loading = true
    //   state.error = null
    // },
    // [registerUser.fulfilled]: (state, { payload }) => {
    //   state.loading = false
    //   state.success = true // registration successful
    // },
    // [registerUser.rejected]: (state, { payload }) => {
    //   state.loading = false
    //   state.error = payload
    // },
  },
});

const authSliceReducer = authSlice.reducer;

export {
  authSliceReducer, registerUser, activateUser, resendActivationEmail,
  loginUser, passwordReset, getEmailByUID, resetPasswordConfirm,
};
