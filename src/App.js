import React from 'react';
// import logo from './images/first.jpg';
// import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import {Navigation, MyPage, Header} from 'common/index';
import {Diary} from 'diary/index';
import {ToDoList} from 'todo/index';
import {Admin} from 'admin/index';



const App = () => (
    <>
    <Header/>
    <Navigation/>
    <MyPage/>
    <Switch>
    <Route exact path='/' component = {ToDoList}/>
    <Redirect from='/home' to = {'/'}/>
    <Route exact path='/todolist' component = {ToDoList}/>
    <Route exact path='/dairy' component = {Diary}/>
    <Route exact path='/admin' component = {Admin}/>
    </Switch>
    </>
  );
export default App;
