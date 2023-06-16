import React from 'react';
import styles from './App.module.scss';
import ToDoContainer from './containers/ToDoContainer/ToDoContainer';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader} />
      <ToDoContainer />
    </div>
  );
}

export default App;
