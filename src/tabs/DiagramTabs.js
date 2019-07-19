import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Canvas from "../canvas/Canvas";


export default class DiagramTabs extends React.Component{
    constructor(props){
        super(props);

        this.newTab = this.newTab.bind(this);
    }

    render(){
        return <div>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                       aria-controls="nav-home" aria-selected="true">Home</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#new" role="tab"
                       aria-controls="nav-contact" aria-selected="false">New</a>
                </div>
            </nav>
            <div className={"tab-content"} id={"nav-content"}>
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <Canvas id={"canvas1"}/>
                </div>
                <div className="tab-pane fade" id="new" role="tabpanel" aria-labelledby="nav-home-tab">New</div>
            </div>
        </div>;
    }

    newTab(){
        console.debug("Adding new diagram tab");
    }
}