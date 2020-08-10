import React from 'react';
import Styles from './TaskDetails.module.css';
import { useSelector } from 'react-redux';
import { selectSelectedTask } from './taskSlice';

const TaskDetails = () => {
  const selectedTask = useSelector(selectSelectedTask);
  return (
    <div className={Styles.details}>
      {selectedTask.title && (
        <>
          <h2>{selectedTask.title}</h2>
          <p>Created at</p>
          <h3>{selectedTask.created_at}</h3>
          <p>Updatated at</p>
          <h3>{selectedTask.updated_at}</h3>
        </>
      )}
    </div>
  );
};

export default TaskDetails;
