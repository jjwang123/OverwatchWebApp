import React from 'react'
import SideBarIcons from './SideBarIcons.jsx'

export default class SideBar extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  render(){
    const {iconVisible, iconName} = this.props

    return <div class = "side-menu">
        <div className={(!this.props.Visible ? "" : "visible ") + this.props.alignment}>
          <SideBarIcons iconName = {iconName} icons = {iconVisible}/>
        </div>
      </div>
  }
}
