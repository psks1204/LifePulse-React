import React from 'react'

const RouteComponent = (props) => {
    const { component:Component , layout:Layout} = props;
    const getComponent = () =>( <Component />)
    console.log(props)
  return  Layout ? <Layout>{getComponent()}</Layout> : getComponent()
     
  
}

export default RouteComponent