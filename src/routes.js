import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout/layout';
import Home from './components/home/home';
import VideoArticle from './components/articles/videos/video/index';

class Routes extends Component{

  state = {
    
  }

  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/videos/:id" exact component={VideoArticle}/>
        </Switch>
      </Layout>
    );
  }

}

export default Routes;