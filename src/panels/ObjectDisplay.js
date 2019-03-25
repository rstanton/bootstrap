import React, {Component} from 'react';

export default class ObjectDisplay extends Component{

    buildForm(){
        let objectID = this.props.id;

        this.applicationName = "SAP for Retail";
    }

    render(){
        this.buildForm();

        return <div className="card w-50">
            <div className="card-body">
                <h5 className="card-title">{this.applicationName}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Save</a>
                <a href="#" className="btn btn-primary">Close</a>
            </div>
        </div>;
    }
}