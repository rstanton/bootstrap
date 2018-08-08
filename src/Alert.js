import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Alert extends React.Component {
    render() {
        return <div className={"alert alert-"+this.props.type} role="alert">
            {this.props.message}
        </div>;
    }
}