import React from 'react'

export default class XblChildren extends React.Component{
  componentWillReceiveProps(nextProps){
  }

  render(){
    const xbl = this.props.xbl

    var output = []
    var output = Object.keys(xbl).map(function(keys){
      return <div class = "idkyet">
              <h2>  {[keys]} : {xbl[keys]} </h2>
             </div>
    })
    return <h2>{output}</h2>
  }

}
