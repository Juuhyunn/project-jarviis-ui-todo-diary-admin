import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const JarviisNavigation = () => (
<>
<Nav>
    <Navul>
        <Navli><Link to="/todolist">To-do list</Link></Navli>
        <Navli><Link to="/dairy">Dairy</Link></Navli>
        <Navli><Link to="/admin">Admin</Link></Navli>

        <Navli><Link to="/login">Login</Link></Navli>
        <Navli><Link to="/join">Join</Link></Navli>
        <Navli><Link to="/checklist">Checklist</Link></Navli>

        <Navli><Link to="/calendar">Calendar</Link></Navli>
        <Navli><Link to="/scheduler">Scheduler</Link></Navli>
        <Navli><Link to="/day">Day</Link></Navli>
        <Navli><Link to="/suggestion">Suggestion</Link></Navli>
        <Navli><Link to='/history'style={{textDecorationLine:'none',color:'black'}}><strong>History</strong></Link></Navli>
        <Navli><Link to='/review'style={{textDecorationLine:'none',color:'black'}}><strong>Review</strong></Link></Navli>
    </Navul>
</Nav>
</>
)
export default JarviisNavigation

const Nav = styled.div`
    // position:fixed;
    text-align:center;
    background: lightgray;
    margin-top:-15px;
    width:100%;
    height:100px;
`

const Navul = styled.ul`
    list-style:none;
    height:50px;
    padding-top:30px;
    padding-bottom:5px;
`

const Navli = styled.li`
    text-align:center;
    float:left;
    font-size:20px;
    // background-color: yellow;
    width: 8%;
`