import React from 'react';
//Containers and Components
import { BookIndex, BookShow, Nav, Auth } from './components'

//Styles
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';
 
import {Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div>
      <Header/>
      <h1>BIBLE BOOKS</h1>
      <Nav/>
      { props.user.username ?
      <Switch>
        <Route path="/books/:id"><BookShow/></Route>
        <Route path="/books"><BookIndex/></Route>
        <Route exact path="/"><BookIndex/></Route>
      </Switch>:
      <Auth/> }
      <GlobalStyle/>
    </div>
  );
}

const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps)(App);
