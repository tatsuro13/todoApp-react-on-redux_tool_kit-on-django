import React, { useEffect } from 'react';
import Styles from './TaskList.module.css';
import TaskItem from './TaskItem';

import { fetchAsyncProf } from '../login/loginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, fetchAsyncGet } from './taskSlice';

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTaskProf = async () => {
      await dispatch(fetchAsyncGet());
      await dispatch(fetchAsyncProf());
    };
    fetchTaskProf();
  }, [dispatch]);
  return (
    <div>
      <ul className={Styles.TaskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
