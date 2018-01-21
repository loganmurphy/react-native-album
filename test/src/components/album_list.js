import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './album_detail';


class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                this.setState({ albums: res.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderAlbums() {
       return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        // console.log(this.state.albums);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
