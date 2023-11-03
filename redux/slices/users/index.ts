import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../hook";

export interface UsersState {
  loading: any;
  error: any;
  data: any;
  oneData4: any;
}

const initialState: UsersState = {
  loading: false,
  error: null,
  data: null,
  oneData4: null,
};

const URL = "user";

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload)
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    removeItem: (state, { payload }) => {
      state.data = state.data.filter((item: any) => item.id !== payload);
    },
    setOneData: (state, action) => {
      state.oneData4 = action.payload;
    },
  },
});

export const { setLoading, setError, setData, setOneData, addItem , removeItem} = usersSlice.actions;
export default usersSlice.reducer;

export const getUsers = () => {
  return async (dispatch: any) => {
    dispatch(setLoading(true));
    axios
      .get(`${API_URL}/${URL}/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(setData(response.data.reverse()));
      })
      .catch((error) => {
        dispatch(setError(error));
      })
      .finally(() => {
        dispatch(setLoading(true));
      });
  };
};

export const getUser = (id: number) => {
  return async (dispatch: any) => {
    dispatch(setLoading(true));
    axios
      .get(`${API_URL}/${URL}/${id}/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(setOneData(response.data));
      })
      .catch((error) => {
        dispatch(setError(error));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};

  
export const addUser = (data: any, After: any) => {
  return async (dispatch: any) => {
      axios.post(`${API_URL}/${URL}/`, data, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'Content-Type' : 'multipart/form-data'
        }
      })
      .then((response) => {
        dispatch(addItem(response.data))
        After()
      })
      .catch((error) => {
          dispatch(setError(error.response.data));
      })
  }
}

export const editUser = (data = {}, id: number) => {
  return async (dispatch: any) => {
    dispatch(setLoading(true));
    axios
      .patch(`${API_URL}/${URL}/${id}/`, data, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => {
        dispatch(setError(error));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};

export const removeUser = (id: number) => {
    return async (dispatch: any) => {
      dispatch(setLoading(true));
      axios
        .delete(`${API_URL}/${URL}/${id}/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          dispatch(removeItem(id));
        })
        .catch((error) => {
          dispatch(setError(error));
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    };
  };
