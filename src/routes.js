import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout/layout';
import Home from './components/home/home';
import NewsArticle from './components/articles/news/post/index';

class Routes extends Component{

  state = {
    
  }

  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/articles/:id" exact component={NewsArticle}/>
        </Switch>
      </Layout>
    );
  }

}

export default Routes;