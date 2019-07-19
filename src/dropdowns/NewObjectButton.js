import React from 'react'

export default class NewObjectButton extends React.Component{
    constructor(props){
        super(props);

        console.debug("initialising New Object drop down");
    }

    render(){
        return <div className="dropdown">
            <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                New
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={this.props.addApp} href="#Application" data-type="Application">Application</a>
            </div>
        </div>;
    }
}