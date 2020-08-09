import React from 'react';
import Styles from './TaskItem.module.css';

import { BsTrash } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchAsyncDelete, selectEditedTask, selectTasks } from './taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <li className={Styles.listItem}>
      <span
        className={Styles.cursor}
        onClick={() => dispatch(selectTasks(task))}
      >
        {task.title}
      </span>
      <div>
        <button
          onClick={() => dispatch(fetchAsyncDelete(task.id))}
          className={Styles.taskIcon}
        >
          <BsTrash />
        </button>
        <button
          onClick={() => dispatch(selectEditedTask(task))}
          className={Styles.taskIcon}
        >
          <FaEdit />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
