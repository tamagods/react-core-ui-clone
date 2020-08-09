import React, { Fragment } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ASidebar from './components/ASidebar/ASidebar';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Dashboard from './views/Dashboard/Dashboard';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="main">
          <Breadcrumb />
          <div className="container-fluid">
            <div className="animated fadeIn">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <Route path="/dashboard" component={Dashboard} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <ASidebar />
      </div>
    </Fragment>
  );
}

export default App;
