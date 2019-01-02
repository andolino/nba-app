import React, { Component } from 'react';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './layout.css';


class Layout extends Component {

  state = {
    showNav: false
  }

  onToggleShowNav = (action) => {
    this.setState({
      showNav: action
    })
  }

  render () {
    return (
      <div>
        <Header 
          showNav={ this.state.showNav }
          onHideNav={ () => this.onToggleShowNav(false) }
          onOpenNav={ () => this.onToggleShowNav(true) }
        />
          {this.props.children}
        <Footer/>
      </div>
    );
  }

}

export default Layout;