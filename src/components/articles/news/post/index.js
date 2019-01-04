import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import styles from '../../articles.css';

class NewsArticles extends Component {

  state = {
    article: [],
    team: []
  }

  componentWillMount() {

    axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
    .then( response => {
      let article = response.data[0];
      axios.get(`${URL}/teams?id=${article.team}`)
      .then( res => {
        this.setState({
          article,
          team: res.data
        });
      })
    });

  }

  render() {
    console.log(this.state);
    return (
      <div>
        
      </div>
    );
  }

}

export default NewsArticles;