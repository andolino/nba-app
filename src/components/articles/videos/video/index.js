import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import styles from '../../articles.css';
import Header from './header';
import VideoRelated from '../../../widgets/VideosList/videosRelated/videoRelated';

class VideoArticle extends Component {

  state = {
    article: [],
    team: [],
    teams: [],
    related: []
  }

  componentWillMount(){
    axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
    .then( response => {
     let article = response.data[0];
     axios.get(`${URL}/teams?id=${article.team}`)
    .then(res => {
      this.setState({
        article,
        team: res.data
      });
      this.getRelated();
    })
    });
  }

  getRelated = () => {
    console.log(this.state);
    axios.get(`${URL}/teams`)
    .then( response => {
      let teams = response.data;
      axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
      .then( response => {
        this.setState({
          teams,
          related: response.data
        });
      })
    })
  }

  render() {
    const article = this.state.article;
    const team = this.state.team;

    return (
      <div>
        <Header teamData={team[0]}/>
        <div className={styles.videoWrapper}>
          <h1>{article.title}</h1>
          <iframe 
            title="videoWrapper"
            width="100%"
            height="300px"           
            src={`https://www.youtube.com/embed/${article.url}`}/>
        </div>
          <VideoRelated
            data={this.state.related}
            teams={this.state.teams}
          />

      </div>
    );
  }
}

export default VideoArticle;