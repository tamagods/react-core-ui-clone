import React, { Fragment } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="app-body">
        <Sidebar />
      </div>
    </Fragment>
  );
}

export default App;
