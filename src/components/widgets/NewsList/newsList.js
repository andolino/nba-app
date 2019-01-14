import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import { URL } from '../../../config';
import { Link } from 'react-router-dom';
import styles from './newsList.css';
import Button from '../../widgets/Buttons/buttons';


// import NewsListTemplate from './newslist_template';
import CardInfo from '../CardInfo/CardInfo';

class NewsList extends Component{

  state = {
    items: [],
    team: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }
 
  componentWillMount(){
    this.request(this.state.start, this.state.end);
  }

  request = (start,end) => {
    if (this.state.team.length < 1) {
      axios.get(`${URL}/teams`)
      .then(response => {
        this.setState({
          team: response.data
        })
      });
    }
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
    .then( response => {
      this.setState({
        items: [...this.state.items,...response.data]
      })
    });
  }

  renderTemplate = (dtype) => {
    let template = null;
    switch (dtype) {
      case 'card':
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter
            }}
            timeout={500}
            key={i}
          >
            <div>
              <div className={styles.newslist_item}>
                <Link to={`articles/${item.id}`}>
                  <CardInfo teams={this.state.team} teamid={item.team} date={item.date} />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>  
          </CSSTransition>
        ));
        break;
      case 'thumb':
      template = this.state.items.map((item, i) => (
        <CSSTransition
          classNames={{
            enter: styles.newsList_wrapper,
            enterActive: styles.newsList_wrapper_enter
          }}
          timeout={500}
          key={i}
        >
          <div>
            <div className={styles.newslist_item}>
              <Link to={`articles/${item.id}`}>
                <div className={styles.videosListWrapper}>
                  <div className={styles.left}
                      style={{
                          background:`url(/images/videos/${item.image})`
                      }}
                  >
                  </div>
                  <CardInfo teams={this.state.team} teamid={item.team} date={item.date} />
                  <h2>{item.title}</h2>
                </div>
              </Link>
            </div>
          </div>  
        </CSSTransition>
      ));
        break;
      default:
        template = null;
    }
    return template;
  } 

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
    this.setState({
      end: end
    });
  }

  render() {
    console.log(this.state.items);
    return(
      <div>
        <TransitionGroup
          component="div"
          className="list"
        >
          {this.renderTemplate( this.props.type )}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    );
  }

}

export default NewsList;