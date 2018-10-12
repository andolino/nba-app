import React, { Component } from 'react';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import './layout.css';

class Layout extends Component {

  state = {

  }

  render (){
    return (
      <div>
        <Header/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Layout;