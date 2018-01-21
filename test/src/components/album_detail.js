import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardItem from './cardItem';
import Button from './button';

const AlbumDetail = ({ album }) => {
    const { 
        textContainerStyle, 
        textStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    const { title, artist, thumbnail_image, image } = album;

    return (
        <Card>
            <CardItem>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle} 
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={textContainerStyle}>
                    <Text style={textStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image 
                    style={imageStyle} 
                    source={{ uri: image }} 
                />
            </CardItem>
            <CardItem>
                <Button />
            </CardItem>
        </Card>
    );
};

const styles = {
    textContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    textStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
