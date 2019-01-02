import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';
import VideosList from '../widgets/VideosList/videosList';


const Home = () => {

  return(
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
        type="card"
        start={3}
        amount={3}
        loadmore={true}
      />

      <VideosList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={3}
      />
    </div>
  );

}

export default Home;