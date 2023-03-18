// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import { Route, Switch } from 'react-router';
import SidenaveLayout from './sidenave-layout/sidenave-layout';
import NxWelcome from './nx-welcome';
import Todo from './todo/todo';
import AppNavbar from './app-navbar/app-navbar';

export function App() {
  return (
    <>
      {/* <NxWelcome title="react-demo" /> */}
      <AppNavbar></AppNavbar>
      <div className='container mt-5'>

      <Todo></Todo>
      </div>

      <div />
    </>
  );
}

export default App;
