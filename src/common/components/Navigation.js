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
    </Navul>
</Nav>
</>
)
export default JarviisNavigation

const Nav = styled.div`
    // position:fixed;
    text-align:center;
    background: #20c997;
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
    width: 10%;
`