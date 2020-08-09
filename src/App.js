import React from 'react';
import Styles from './App.module.css';
import { FaSignInAlt } from 'react-icons/fa';
import TaskList from './features/task/TaskList';

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
        <TaskList />
      </div>
      <div className={Styles.appDetails}></div>
    </div>
  );
}

export default App;
