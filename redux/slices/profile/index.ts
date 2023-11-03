import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../hook";

export interface ProfileState {
  loading: any;
  error: any;
  data: any;
  oneData2: any;
}

const initialState: ProfileState = {
  loading: false,
  error: null,
  data: null,
  oneData2: null,
};

const URL = 'accounts/profile'

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setOneData: (state, action) => {
      state.oneData2 = action.payload;
    },
  },
});

export const { setLoading, setError, setData, setOneData } = profileSlice.actions
export default profileSlice.reducer

export const getProfile = () => {
    return async (dispatch: any) => {
        axios.get(`${API_URL}/${URL}/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        })
        .then((response) => {
            dispatch(setData(response.data));
        })
        .catch((error) => {
            dispatch(setError(error));
        })
    }
}

export const RegisterProfile = (data: any) => {
  return async (dispatch: any) => {
      axios.post(`${API_URL}/accounts/register/`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        alert('Вы успешно зарегистрировались')
          window.location.replace('/login')
      })
      .catch((error) => {
          dispatch(setError(error.response.data));
      })
  }
}

export const LoginProfile = (data: any) => {
  return async (dispatch: any) => {
      axios.post(`${API_URL}/accounts/login/`, data)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        axios.get(`${API_URL}/accounts/profile/`,{
          headers: {
            Authorization: `Token ${response.data.token}`
          }
        })
          .then((response) => {
            localStorage.setItem('profile', JSON.stringify(response.data))
            window.location.replace('/mainlayout/team')
          })
          .catch((error) => {
              dispatch(setError(error.response.data));
          })
      })
      .catch((error) => {
          dispatch(setError(error.response.data));
      })
  }
}

export const EditProfile = (data: any) => {
  return async (dispatch: any) => {
      axios.patch(`${API_URL}/accounts/profile/`, data, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => {
          dispatch(setError(error.response.data));
      })
  }
}
