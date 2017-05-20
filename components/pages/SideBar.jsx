import React from 'react'
import SideBarIcons from './SideBarIcons.jsx'

export default class SideBar extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  render(){
    return <div class = "side-menu">
        <div className={(!this.props.Visible ? "" : "visible ") + this.props.alignment}>
          <SideBarIcons />
        </div>
      </div>
  }
}
