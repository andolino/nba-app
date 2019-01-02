import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import Header from './header';

class VideoArticle extends Component {

  state = {
    team: []
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    axios.get(`${URL}/teams?id=${id}`)
    .then(response => {
      this.setState({
        team: response.data
      })
    });
  }

  render() {
    console.log(this.state.team);
    return (
      <div>
        <Header/>
        Video Article
      </div>
    );
  }
}

export default VideoArticle;