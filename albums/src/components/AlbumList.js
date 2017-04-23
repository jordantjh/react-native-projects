import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { retrieve: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          .then(response => this.setState({ retrieve: response.data }));
  }

  renderAlbums() {
    return this.state.retrieve.map(album =>
        <AlbumDetail key={album.title} album={album} />
      );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
