import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardItem, Button } from './common';
import EmployeeForm from './employeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm  {...this.props} />
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

const mapStatetoProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStatetoProps, { 
    employeeUpdate, 
    employeeCreate 
})(EmployeeCreate);