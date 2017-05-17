import React from 'react'
import SideBarIcons from './SideBarIcons.jsx'

export default class SideBar extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.state.visible)
  }
  render(){
    return <div class = "side-menu">
        <div className={(!this.props.Visible ? "" : "visible ") + this.props.alignment}>
          <SideBarIcons />
        </div>
      </div>
  }
}
