import React from 'react'
import { connect } from 'react-redux'
import { fetchXbl } from '../../actions/xblActions'
import {Motion, spring} from 'react-motion';
import XblChildren from './XblChildren.jsx'
import SideBar from './SideBar.jsx'

@connect((store) => {
  return {
    xbl: store.xbl.xbl,
    fetching: store.xbl.fetching,
  }
})

export default class Xbl extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       Visible: false,
       Name: null
     }
     this.__onClick = this.__onClick.bind(this)
     this.fetchXbl = this.fetchXbl.bind(this)
  }

  componentDidMount() {
    var response = this.props.dispatch(fetchXbl())
    var path = response
  }

  fetchXbl(e) {
    this.props.dispatch(fetchXbl(e.target.value))
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.fetchXbl(e)
    }
  }

  __onClick = (e) => {
    console.log(e.target.tagName)
    console.log(this.state.Visible)
    if(e.target.tagName.toLowerCase() === "img"){
      this.setState({Name: e.target.name})
      this.setState({Visible: true})
    }
  }

  render() {
    const { fetching, xbl } = this.props
    var output = []
    var output =
      Object.keys(xbl).map((keys) => {
        return <div class= "col-md-3" key = {[keys]}>
                  <div class = "hero-portrait">
                    <img name = {[keys]} src = {"../../HeroImages/" + [keys] + "-portrait.png" }></img>
                    {[keys]}
                  </div>
            </div>
    })
    return <div id = "content">
                <div class = "row">
                  <div class="col-md-12 pt50 text-center">
                    <h1 class = "title">Search by btag</h1>
                  </div>
                  <div class="col-md-8 col-md-offset-2 text-center">
                    <input type="text" onKeyPress = {this._handleKeyPress} class="form-control input-circle input-lg no-border text-center"/>
                  </div>
                </div>
              <div class="row text-center" onClick = {this.__onClick}>
                { this.state.Visible
                  ?<SideBar Visible = {this.state.Visible} alignment = "left"/>
                  : null
                }
                <div class = "portrait-container">
                  {output}
                </div>
                <div class = "hero-data">
                  { this.state.Visible
                    ?<XblChildren xbl = {xbl[this.state.Name]} />
                    : null
                  }
                </div>
              </div>
            </div>
  }
}
