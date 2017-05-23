import React from 'react'
import XblChildrenChildren from './XblChildrenChildren.jsx'

export default class XblChildren extends React.Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps.xbl["Assists"])
  }

  render(){
    const {xbl, fieldType} = this.props

    var output = []
    var output = Object.keys(xbl).map((keys) => {
      return <div class = "stats" key = {[keys]}>
              <div class = "stat-name">{[keys]}</div>
              <div class = "stat-numbers"><XblChildrenChildren xbl = {xbl[keys]}/></div>
            </div>
    }).reduce((result, keys) => {
      if(keys.key === fieldType) result.push(keys)
      return result
    }, [])
    return <h2>{output}</h2>
  }
}
