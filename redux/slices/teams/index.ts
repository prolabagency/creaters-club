import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../hook";

export interface TeamsState {
  loading: any;
  error: any;
  data: any;
  oneData: any;
}

const initialState: TeamsState = {
  loading: false,
  error: null,
  data: null,
  oneData: null,
};

const URL = "teams";

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload);
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
    setOneData: (state, action) => {
      state.oneData = action.payload;
    },
  },
});

export const { setLoading, setError, setData, setOneData, addItem } = teamsSlice.actions;
export default teamsSlice.reducer;

export const getTeams = () => {
  return async (dispatch: any) => {
    dispatch(setLoading(true));
    axios
      .get(`${API_URL}/${URL}/`, {
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
        dispatch(setLoading(true));
      });
  };
};

export const getTeam = (id: number) => {
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

export const addTeam = (data: any, After: any) => {
  return async (dispatch: any) => {
      axios.post(`${API_URL}/${URL}/`, data, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
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

export const editTeam = (data = {}, id: number) => {
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

export const removeTeam = (id: number) => {
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
