import React from 'react';
import ToolCardItem from './toolCardItem';
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
        return <div id={"toolCard"} className={"toolCard"} data-type="toolCard">
            <div className="card">
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <ToolCardItem label={"Save"} action={this.saveHandler}/>
                        <li className="list-group-item">Save</li>
                        <li className="list-group-item">Objects</li>
                        <li className="list-group-item">Settings</li>
                    </ul>
                </div>
            </div>
        </div>;
    }

    saveHandler(){
        console.info("Saving diagram");
    }
}