import React from 'react'

import Navigation from './header/Navigation.jsx'
import Xbl from './Pages/Xbl.jsx'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <section class = "container">
          {this.props.children}
        </section>
      </div>
    );
  }
}
