import React from 'react'
import XblChildrenChildren from './XblChildrenChildren.jsx'

export default class XblChildren extends React.Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps.xbl["Assists"])
  }

  render(){
    const xbl = this.props.xbl

    var output = []
    var output = Object.keys(xbl).map(function(keys){
      return <div class = "stats">
              <div class = "stat-name">{[keys]}</div>
              <div class = "stat-numbers"><XblChildrenChildren xbl = {xbl[keys]} /></div>
            </div>
    })
    return <h2>{output}</h2>
  }
}
