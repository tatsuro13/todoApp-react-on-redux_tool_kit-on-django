import Axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:8000/api/tasks/';
const token = localStorage.localJWT;

export const fetchAsyncGet = createAsyncThunk('task/get', async () => {
  const res = await Axios.get(apiUrl, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
  return res.data;
});

export const fetchAsyncCreate = createAsyncThunk('task/post', async (task) => {
  const res = await Axios.post(apiUrl, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  });
  return res.data;
});

export const fetchAsyncUpdate = createAsyncThunk('task/put', async (task) => {
  const res = await Axios.put(`${apiUrl}{task.id}/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  });
  return res.data;
});

export const fetchAsyncDelete = createAsyncThunk('task/delete', async (id) => {
  await Axios.delete(`${apiUrl}{id}/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  });
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        id: 0,
        title: 0,
        created_at: '',
        updated_at: '',
      },
    ],
    editedTask: [
      {
        id: 0,
        title: 0,
        created_at: '',
        updated_at: '',
      },
    ],
    selectedTtask: [
      {
        id: 0,
        title: 0,
        created_at: '',
        updated_at: '',
      },
    ],
  },
  reducers: {
    editTask(state, action) {
      state.editedTask = action.payload;
    },
    selectTask(state, action) {
      state.selectedTask = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: action.payload,
      };
    });
    builder.addCase(fetchAsyncCreate.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    });
    builder.addCase(fetchAsyncUpdate.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
        selectedTtask: action.payload,
      };
    });
    builder.addCase(fetchAsyncDelete.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
        selectedTtask: { id: 0, title: 0, created_at: '', updated_at: '' },
      };
    });
  },
});

export const { editTask, selectTask } = taskSlice.actions;

export const selectSelected = (state) => state.task.selectedTask;
export const selectEdited = (state) => state.task.editedTask;
export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
