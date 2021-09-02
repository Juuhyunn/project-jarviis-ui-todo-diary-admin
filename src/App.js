import React from 'react';
// import logo from './images/first.jpg';
// import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import {Navigation, MyPage, Header, Suggestion, Day} from 'common/index';
import {Diary} from 'diary/index';
import {ToDoList} from 'todo/index';
import {Admin} from 'admin/index';
import {Login, Join} from 'user/index'
import { Checklist } from 'survey/index';
import { Calendar } from 'calender/index';
import { Scheduler } from 'schedulers/index';
import {History} from 'historys/index';
import {Review} from 'review/index';
import {Setting} from 'setting/index';




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

    <Route exact path='/login' component= {Login}/>
    <Route exact path='/join' component={Join}/>
    <Route exact path='/checklist' component={Checklist}/>

    <Route exact path= '/calendar' component = {Calendar}/>
    <Route exact path= '/scheduler' component = {Scheduler}/>
    <Route exact path= '/day' component = {Day}/>
    <Route exact path= '/suggestion' component = {Suggestion}/>

    <Route exect path='/history' component={History}/>
    <Route exect path='/review' component={Review}/>
    <Route exect path='/setting' component={Setting}/>
    </Switch>
    </>
  );
export default App;
