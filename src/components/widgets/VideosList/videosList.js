import React, { Component } from 'react';
import styles from './videosList.css';
import axios from 'axios';
import { URL } from '../../../config';
import Button from '../Buttons/buttons';
import VideoTemplate from './videosListTemplate';

class VideoList extends Component {
  
  state = {
    videos: [],
    teams: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  componentWillMount(){
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`)
      .then( response => {
        this.setState({
          teams: response.data
        })
      })
    }

    axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
    .then( response => {
      this.setState({
        videos: [...this.state.videos, ...response.data],
        start,
        end
      })
    })
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  }

  renderTitle = (title) => {
    return title ? <h3><strong>NBA</strong> Videos </h3> : ''
  }

  //add
  renderVideo = (type) => {
    let template = null;
    switch (type) {
      case 'card':
        template = <VideoTemplate articles={this.state.videos} teams={this.state.teams} />
        break;
      default:
        template = null;
        break;
    }
    return template;
  }
  //add end

  renderButton = () => {
    return this.props.loadmore ? 
      <Button
        type="loadmore"
        cta="Load More Videos"
        loadMore={() => this.loadMore()}
      /> 
    : <Button
        type="linkTo"
        cta="More Videos"
        linkTo="/videos"
      />
  }
  
  render() {
    return (
      <div className={styles.videoList_wrapper}>
        { this.renderTitle(this.props.title) }
        { this.renderVideo(this.props.type) }
        { this.renderButton() }
      </div>
    );
  }


}

export default VideoList;