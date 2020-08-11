import React from 'react';
import Styles from './App.module.css';
import { FaSignInAlt } from 'react-icons/fa';
import TaskList from './features/task/TaskList';
import TaskDetails from './features/task/TaskDetails';
import TaskInput from './features/task/TaskInput';
import Header from './features/login/Header';

function App() {
  const Logout = () => {
    localStorage.removeItem('localJWT');
    window.location.href = '/';
  };
  return (
    <div className={Styles.containerTasks}>
      <div className={Styles.appTasks}>
        <button onClick={Logout} className={Styles.signBtn}>
          <FaSignInAlt />
        </button>
        <Header />
        <TaskInput />
        <TaskList />
      </div>
      <div className={Styles.appDetails}>
        <TaskDetails />
      </div>
    </div>
  );
}

export default App;
