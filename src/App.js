import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import PageList from './components/Pages/PageList'

function App() {
  const currentDate = new Date;

  return (
    <div className="App">
      <header>
        <PageList currentDate={currentDate} />
      </header>
      <AmplifySignOut className="custom-signout-button" />
    </div>
  );
}

export default withAuthenticator(App);
