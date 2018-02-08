import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { employeeUpdate } from '../actions';
import { CardItem, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardItem>
                    <Input
                        label='Name'
                        placeholder='Jane'
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardItem>

                <CardItem 
                    // style={{ flexDirection: 'column' }}
                >
                    <Text style={styles.pickerTextStyle}>
                        Shift
                    </Text>
                    <Picker
                        style={{ flex: 1, marginLeft: -50 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardItem>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        marginBottom: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);