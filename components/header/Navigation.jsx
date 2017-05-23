import React from 'React'

export default class Navigation extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    const {xbl, name, Visible} = this.props

    return (
      <section class = "head-bar">
        <nav class="navbar navbar-default navbar-static-top" role = "navigation">
          <a class="navbar-brand" href="/">OVER<span class = "bolded">API</span></a>
        </nav>
        <div class = "catch-us-on">OverAPI is available on
        <a href = "https://discordapp.com/oauth2/authorize?client_id=291038306060468224&scope=bot&permissions=0">
        <img src = "discord-logo.svg" class = "discord-logo">
        </img>
        </a></div>
        { !Visible
          ?<div class = "hero-image">
            <div class = "hero-slogan">
              <h1>Overpower</h1>
              <h2>with</h2>
              <h3>OVERAPI</h3>
            </div>
          </div>
          : <div class = {name}>
            <div class = "hero-specific-slogan">
              {name}
            </div>
            <div class = "hero-specific-image">
            </div>
          </div>
        }
      </section>
    );
  }
}
