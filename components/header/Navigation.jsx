import React from 'React'

export default class Navigation extends React.Component{
  render() {
    return (
      <section class = "head-bar">
        <nav class="navbar navbar-default navbar-static-top" role = "navigation">
          <a class="navbar-brand" href="/">Locations</a>
          <a class="navbar-brand" href="/">Contact</a>
        </nav>
        <div class = "hero-image">
        </div>
        <div class = "page-title">OverAPI</div>
      </section>
    );
  }
}
