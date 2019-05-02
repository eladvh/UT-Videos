import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
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
        selectedVideo: response.data.items[0]
      })
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} /><br />
        <div className="ui_grid">
            <div className="ui_video">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="ui_list">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
