import React from 'react';

// API Key
import { apiKey } from './config.js';
// Component
import Header from './components/Header';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.getPhotoData = this.getPhotoData.bind(this); // Binds getPhotoData to App
    this.updateTagForTitle = this.updateTagForTitle.bind(this); // Binds updateTagForTitle to App
    this.state = {
      url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
      imgData: [],
      imgLinks: [],
      tag: null,
      isLoading: true,
      error: null
    };
  }

  /**
   * After mount, calls getPhotoData
   */
  componentDidMount () {
    this.getPhotoData(this.props.match.params.params || "brown");
  }

  /**
   * Builds string for <img> src path
   * @param {object} data | Object from fetch request
   */
  buildImgSrcStr (data) {
    return `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`
  }

  /**
   * Requests photo objects from flickr API
   * @param {string} tag | query string for fetch request
   */
  getPhotoData (tag) {
    let qString = `&api_key=${apiKey}&tags=${tag}&per_page=24&safe_search=1&format=json&nojsoncallback=1`;
    this.setState({ isLoading: true });
    fetch(this.state.url.concat(qString))
      .then(res => res.json())
      .then(res => this.setState({
        tag,
        imgData: res.photos.photo, 
        imgLinks: res.photos.photo.map(img => this.buildImgSrcStr(img)),
        isLoading: false}))
      .catch(error => this.setState({error}))
  }

  /**
   * Updates tag state, which is passed to Header and used as title of page
   * @param {string} tag | string for dynamic title
   */
  updateTagForTitle (tag) {
    this.setState({
      tag
    })
  }

  render () {
    return (
        <div className="App">
          <Header 
              imgLinks={this.state.imgLinks}
              imgData={this.state.imgData}
              fetch={this.getPhotoData}
              title={this.state.tag}
              isloading={this.state.isLoading}
              pageNotFound={this.updateTagForTitle}
          />
        </div>
    );
  }
}

export default App;
