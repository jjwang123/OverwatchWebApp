import React from 'react'
import { connect } from 'react-redux'
import { fetchXbl } from '../../actions/xblActions'
import XblChildren from './XblChildren.jsx'

@connect((store) => {
  return {
    xbl: store.xbl.xbl,
    fetching: store.xbl.fetching,
  }
})

export default class Xbl extends React.Component {
  constructor(props) {
     super(props)
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

  render() {
    const { fetching, xbl } = this.props
    var output = []
    var output = Object.keys(xbl).map(function(keys){
      return <div class = "names">
              <h2>{[keys]}</h2>
              <div class = "work"><XblChildren xbl = {xbl[keys]} /></div>
            </div>
    })
    return <div id = "content">
              <div class = "Overlord">
                <div class = "row">
                  <div class="col-md-12 pt50 text-center">
                    <h1 class = "title">Search by btag</h1>
                  </div>
                  <div class="col-md-8 col-md-offset-2 text-center">
                    <input type="text" onKeyPress = {this._handleKeyPress} class="form-control input-circle input-lg no-border text-center"/>
                  </div>
                </div>
              </div>
              <div class="row text-center">
                {output}
              </div>
            </div>
    /*return <div id="content">
              <div class="Overlord">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 pt50 text-center">
                      <h1 class = "title">Search by btag</h1>
                    </div>
                    <div class="col-md-8 col-md-offset-2 text-center">
                      <input type="text" onKeyPress = {this._handleKeyPress} class="form-control input-circle input-lg no-border text-center"/>
                    </div>
                  </div>
                  <hr />
                  <div class="row text-center">
                    // {
                    //
                    //   Object.keys(xbl).map(function(keys){
                    //     // console.log(keys)
                    //     // console.log(xbl[keys])
                    //     // return <h2>{keys["Assists"]["Healing done"]}</h2>
                    //   })
                    //
                    //   })
                    //   }
                  </div>
                </div>
              </div>
           </div>*/

  }
}
