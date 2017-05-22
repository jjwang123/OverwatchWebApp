import React from 'react'
import HeroClasses from './HeroClasses.jsx'
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
    const { xbl, icons, iconName } = this.props
    const offense = ["Genji", "Mccree", "Sombra", "Soldier: 76", "Tracer", "Reaper", "Pharah"]
    const defense = ["Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker"]
    const tank = ["D.Va", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya"]
    const support = ["Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta"]

    return <div class = "side-menu-item">

      <div class = "items">
        <img name = "offense" src = {"../../HeroImages/ClassIcons/offense-icon.png"}></img>
        <HeroClasses xbl = {xbl} iconName = {iconName} icons = {icons} classKey = {offense}/>
      </div>
      <div class = "items">
        <img name = "defense" src = {"../../HeroImages/ClassIcons/defense-icon.png"}></img>
        <HeroClasses xbl = {xbl} iconName = {iconName} icons = {icons} classKey = {defense}/>
      </div>
      <div class = "items">
        <img name = "tank" src = {"../../HeroImages/ClassIcons/tank-icon.png"}></img>
        <HeroClasses xbl = {xbl} iconName = {iconName} icons = {icons} classKey = {tank}/>
      </div>
      <div class = "items">
        <img name = "support" src = {"../../HeroImages/ClassIcons/support-icon.png"}></img>
        <HeroClasses xbl = {xbl} iconName = {iconName} icons = {icons} classKey = {support}/>
      </div>
    </div>
    /*<HeroClasses xbl = {xbl} iconName = {iconName} icons = {icons} classKey = {defense} />
    <HeroClasses xbl = {xbl} iconName = {iconName} icons = {icons} classKey = {tank} />
    <HeroClasses xbl = {xbl} iconName = {iconName} icons = {icons} classKey = {support} />*/
  }
}
