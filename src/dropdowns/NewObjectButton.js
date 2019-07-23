import React from 'react'

export default class NewObjectButton extends React.Component{
    constructor(props){
        super(props);

        console.debug("initialising New Object drop down");
    }

    render(){
        //@ToDo this should be built from a list of valid object types (from the DB)
        return <div className="dropdown">
            <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                New
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={this.props.addApp} href="#Application" data-type="Application">Application</a>
                <a className="dropdown-item" onClick={this.props.addApp} href="#BusinessService" data-type="BusinessService">Business Service</a>
            </div>
        </div>;
    }
}