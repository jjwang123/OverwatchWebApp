import React from 'react'

export default class HeroClasses extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {xbl, classKey, name, icons, iconName} = this.props

    var output = []
    var output =
      Object.keys(xbl).map((keys) => {
        return  <div class= "row" key = {[keys]}>
                  <div class = "hero-icons">
                    <img name = {[keys]} src = {"../../HeroImages/Icons/" + [keys] + "_icon.png" }></img>
                  </div>
                </div>
      }).reduce((result, keys) => {
        if(classKey.indexOf(keys.key) !== -1) result.push(keys)
          return result
        }, [])

    return <div class = {name} key = {name}>
      /*<div class = "row">
        <img name = {name} src = {"../../HeroImages/ClassIcons/" + name + "-icon.png"}></img>
      </div>
      {console.log(output)}
      {icons && iconName === name
        ?output
        : null
      }*/
      {output}
    </div>
  }
}
