import React from 'react'
import styled from 'styled-components'
import '../styles/Test.css'
import Chart1 from './Chart1'
import Chartdata from './Chartdata'

const Test = () => (<>
<div class="wrap">

<label for="menu1" class="label e">
  <span class="rotate">
    <p>MENU 1</p>
  </span>
</label>
<input type="radio" name="navigation" id="menu1" class="button"/>

<div class="contents">
  {/* <Chart1/> */}
  <Chart1 data= {Chartdata}/>

</div>


<label for="menu2" class="label d">
  <span class="rotate">
    <p>MENU 2</p>
  </span>
</label>
<input type="radio" name="navigation" id="menu2" class="button"/>
<div class="contents">
  <Chart1 data= {Chartdata}/>
    
  
</div>


<label for="menu3" class="label c">
  <span class="rotate">
    <p>MENU 3</p>
  </span>
</label>    
<input type="radio" name="navigation" id="menu3" class="button"/>
<div class="contents">
  <div class="inner">
    <div class="description">
      <h3>TITLE 3</h3>
      <p>다람쥐 헌 챗바퀴에 타고파. 다람쥐 헌 챗바퀴에 타고파. 다람쥐 헌 챗바퀴에 타고파. 다람쥐 헌 챗바퀴에 타고파.</p>
    </div>
  </div>
</div>
</div></>
)
export default Test