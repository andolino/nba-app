import React from 'react';
import styles from './news.css';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';

const News = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{
          dots: false
        }}
      />
      <NewsList
        type="thumb"
        start={3}
        amount={3}
        loadmore={false}
      />
    </div>
  );
};

export default News;