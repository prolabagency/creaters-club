import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../hook";

export interface CitiesState {
  loading: any;
  error: any;
  data: any;
  oneData1: any;
}

const initialState: CitiesState = {
  loading: false,
  error: null,
  data: null,
  oneData1: null,
};

const URL = "cities";

export const citiesSlice = createSlice({
  name: "cities",
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
      state.oneData1 = action.payload;
    },
  },
});

export const { setLoading, setError, setData, setOneData } = citiesSlice.actions;
export default citiesSlice.reducer;

export const getCities = () => {
  return async (dispatch: any) => {
    dispatch(setLoading(true));
    axios
      .get(`${API_URL}/${URL}/`)
      .then((response) => {
        dispatch(setData(response.data));
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
