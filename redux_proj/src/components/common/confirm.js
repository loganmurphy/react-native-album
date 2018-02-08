import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardItem } from './cardItem';
import { Button } from './button';

const Confirm = ({ children, visible, onAccept, onDecline }) => { 
    const { containerStyle, textStyle, cardItemStyle } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType='slide'
            // Android requires that the onRequestClose prop be passed in, even if 
            // it is empty. It isn't needed by iOS.
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardItem style={cardItemStyle}>
                    <Text style={textStyle}>
                    {children
                    }</Text>
                </CardItem>

                <CardItem>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardItem>
            </View>
        </Modal>
    );
};

const styles = {
    cardItemStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    }
};

export { Confirm };