import React, { Fragment } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ASidebar from './components/ASidebar/ASidebar';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="main">
          <Breadcrumb />
        </main>
        <ASidebar />
      </div>
    </Fragment>
  );
}

export default App;
