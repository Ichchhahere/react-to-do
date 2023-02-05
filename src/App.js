import React from 'react';
import PageTItle from './components/PageTItle';
import AppHeader from './components/AppHeader';
import styles from './styles/modules/app.module.scss';
import AppContent from './components/AppContent';

function App() {
  return (
    <div className="container">
      <PageTItle>Todo List</PageTItle>
      <div className={styles.app_wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
