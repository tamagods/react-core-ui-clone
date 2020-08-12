import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import ASidebar from './components/ASidebar/ASidebar';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './views/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="main">
          <Breadcrumb />
          <div className="container-fluid">
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </main>
        <ASidebar />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;