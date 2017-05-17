import React from 'react'

import Navigation from './header/Navigation.jsx'
import Xbl from './Pages/Xbl.jsx'
import SideBar from './Pages/SideBar.jsx'

export default class Layout extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    return (
       <div>
         <Navigation />
         <section id = "heros">
           <div class = "container">
             <Xbl/>
           </div>
         </section>
       </div>
    );
  }
}
