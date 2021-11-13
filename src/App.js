import React from 'react';
//Containers and Components
import { BookIndex, BookShow } from './components'

//Styles
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';
 
import {Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <h1>Start here</h1>
      <Switch>
        <Route path="/books/:id"><BookShow/></Route>
        <Route path="/books"><BookIndex/></Route>
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default App;
