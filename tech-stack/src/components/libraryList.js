import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './listItem';

class LibraryList extends Component {

    // This bit of code handles performance when displaying lists on mobile

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}


// The next two sections of code connect the redux store to the react-app

const mapStateToProps = state => {
    return { libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);