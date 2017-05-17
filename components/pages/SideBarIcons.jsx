import React from 'react'
import { connect } from 'react-redux'

@connect((store) => {
  return {
    xbl: store.xbl.xbl,
    fetching: store.xbl.fetching,
  }
})

export default class SideBarIcons extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillReceiveProps(nextProps){
  }

  render(){
    const { xbl } = this.props
    var output = []
    var output =
      Object.keys(xbl).map((keys) => {
        return <div class= "row" key = {[keys]}>
                  <div class = "hero-icons">
                    <img name = {[keys]} src = {"../../HeroImages/Icons/" + [keys] + "_icon.png" }></img>
                  </div>
            </div>
    })
    return <div class = "side-menu-item">
      {output}
    </div>
  }
}
