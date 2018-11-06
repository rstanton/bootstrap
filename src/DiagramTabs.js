import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Canvas from "./Canvas";

export default class DiagramTabs extends React.Component{
    constructor(props){
        super(props);

        this.newTab = this.newTab.bind(this);
    }

    render(){
        return <div><nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                   aria-controls="nav-home" aria-selected="true">Home</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                   aria-controls="nav-profile" aria-selected="false">Profile</a>
                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
                   aria-controls="nav-contact" aria-selected="false">Contact</a>
            </div>
            </nav>
            <div className={"tab-content"} id={"nav-content"}>
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <Canvas/>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-home-tab">asd</div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-home-tab">sdsds</div>
            </div>
        </div>;
    }

    newTab(){
        console.debug("Adding new diagram tab");
    }
}