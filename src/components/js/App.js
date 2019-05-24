import React from 'react';
import UserLocation from './UserLocation';
import SearchBar from './SearchBar';
import youtube from '../../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import NewComment from './NewComment';
import Comment from './Comment';
import faker from 'faker';
import 'font-awesome/css/font-awesome.min.css';
import '../css/App.css';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  
  componentDidMount() {
    this.onTermSubmit('new')
  }
  
  onTermSubmit = async term => {
      const response = await youtube.get('/search', {
        params: {
          q: term
        }
      });

      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      })
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="ui">
        <UserLocation /><br/>
        <SearchBar onFormSubmit={this.onTermSubmit} /><br />
        <div className="ui_grid">
            <div className="ui_video">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="ui_list">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
            <div>
              <NewComment />
              <br/><br/>
              <Comment 
                author={faker.name.firstName()}
                timeAgo={faker.date.past().toString()}
                content={faker.lorem.sentences()}
                avatar={faker.image.avatar()}
              />
              <Comment 
                author={faker.name.firstName()}
                timeAgo={faker.date.past().toString()}
                content={faker.lorem.sentences()}
                avatar={faker.image.avatar()}
              />
              <Comment 
                author={faker.name.firstName()}
                timeAgo={faker.date.past().toString()}
                content={faker.lorem.sentences()}
                avatar={faker.image.avatar()}
              />
              <Comment 
                author={faker.name.firstName()}
                timeAgo={faker.date.past().toString()}
                content={faker.lorem.sentences()}
                avatar={faker.image.avatar()}
              />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
