import React from 'react';
import './ToolCard.scss';

/**
 * Draggable tool card,
 * Should contain a link to settings, objects etc.
 */

export default class ToolCard extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        $("#toolCard").draggable();
    }

    render(){
        return <div id={"toolCard"} className={"toolCard"}>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>;
    }
}