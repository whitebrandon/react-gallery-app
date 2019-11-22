import React from 'react';

// API Key
import { apiKey } from './config.js';

// Components modules
import Header from './components/Header';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.getPhotoData = this.getPhotoData.bind(this);
    this.state = {
      url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
      imgData: [],
      imgLinks: [],
      tag: "pizza",
      isLoading: true,
      error: null
    };
  }

  componentDidMount () {
    this.getPhotoData(this.state.tag);
    this.props.history.push(`/search/${this.state.tag}`);
  }

  buildImgSrcStr (data) {
    return `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`
  }

  getPhotoData (tag) {
    let qString = `&api_key=${apiKey}&tags=${tag}&per_page=24&safe_search=1&format=json&nojsoncallback=1`;
    fetch(this.state.url.concat(qString))
      .then(res => res.json())
      .then(res => this.setState({
        tag,
        imgData: res.photos.photo, 
        imgLinks: res.photos.photo.map(img => this.buildImgSrcStr(img)),
        isLoading: false}))
      .catch(error => this.setState({error}))
  }

  render () {
    return (
        <div className="App">
          <Header 
              imgLinks={this.state.imgLinks}
              imgData={this.state.imgData}
              fetch={this.getPhotoData}
              handleChange={this.handleChange}
              title={this.state.tag}
              isloading={this.isLoading}
          />
        </div>
    );
  }
}

export default App;
