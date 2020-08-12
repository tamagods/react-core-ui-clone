import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import ASidebar from './components/ASidebar/ASidebar';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './views/Dashboard/Dashboard';
import Colors from './views/Theme/Colors/Colors';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/theme/colors" component={Colors} />
          </Switch>
        </main>
        <ASidebar />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;