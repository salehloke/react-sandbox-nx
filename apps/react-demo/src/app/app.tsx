// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      {/* <NxWelcome title="react-demo" /> */}

      <Button variant="primary">Click me</Button>
      <div />
    </>
  );
}

export default App;
