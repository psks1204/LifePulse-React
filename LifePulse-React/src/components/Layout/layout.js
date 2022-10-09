import React from 'react'
import Home from './../Home/home'

const  layout = (props) => {
  return (
    <div style={{display:'flex' }}>
      <div ><Home /> </div>
      <div style={{ marginTop:'138px' , marginLeft:'-1200px' , minWidth:'1200px'}}>{props.children} </div>
    </div>
  )
}

export default layout