import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

// const initialState = {
//   allReviews: [],
//   currentReview: {},
// };
const initialState = {
  userName: null,
  userEmail: null,
  // userPassword: '',
  userPhone: null,
  userId: null,
  isSending: false,
  sendDataSucces: false,
  registerSucces: false,
  registerError: null,
};

// const getAllReviews = createAsyncThunk('reviews/getAllReviews', async () => {
//   try {
//     return api.getReviews();
//   } catch (err) {
//     return err;
//   }
// });

// const getReviewById = createAsyncThunk('reviews/getReviewById', async (id) => {
//   try {
//     return api.getReviewWithSlug(id);
//   } catch (err) {
//     return err;
//   }
// });

// export const postRegister: AppThunk = (form: TUser) => {
//   return function (dispatch: AppDispatch) {
//     dispatch(authRequest());
//     fetch(`${baseUrl}auth/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     })
//       .then(checkResponse)
//       .then((res) => {
//         if (res && res.success) {
//           localStorage.setItem("refreshToken", res.refreshToken);
//           let authToken = res.accessToken.split("Bearer ")[1];
//           if (authToken) {
//             setCookie("token", authToken);
//           }
//           dispatch(getUserSuccess(res.user.name, res.user.email, res.success));
//           dispatch(postRegisterSuccess());
//         } else {
//           dispatch(authFailed());
//         }
//       })
//       .catch((err) => {
//         dispatch(authFailed());
//       });
//   };
// };

const registerUser = createAsyncThunk('auth/registerUser', async (data) => {
  try {
    return api.postRegisterUser(data);
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
      // state.authFailed = false;
      state.registerError = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isSending = false;
      state.registerError = false;
      state.sendDataSucces = true;
      console.log(action.payload);
      state.userName = action.payload.first_name;
      state.userEmail = action.payload.email;
      state.userId = action.payload.id;
      state.userPhone = action.payload.phone;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isSending = false;
      state.sendDataSucces = false;
      console.log(action);
      state.registerError = true;
      // bypass error
      state.registerError = false;
      state.sendDataSucces = true;
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
    // builder.addCase(getAllReviews.fulfilled, (state, action) => {
    //   state.allReviews = action.payload;
    // });

    // builder.addCase(getReviewById.fulfilled, (state, action) => {
    //   state.currentReview = action.payload;
    // });
    // builder.addCase(authRequest.fulfilled, (state, action) => {
    //   state.requestState = true;
    // });
  },
});

// const { setCurrentReview } = reviewsSlice.actions;
// const reviewsSliceReducer = reviewsSlice.reducer;
// const { setCurrentAuth } = authSlice.actions;
const authSliceReducer = authSlice.reducer;

export {
  authSliceReducer, registerUser,
};
