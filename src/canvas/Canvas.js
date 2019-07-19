import React from 'react';
import Draw2DCanvas from './Draw2DCanvas';
import './Canvas.scss';
import NewObjectButton from "../dropdowns/NewObjectButton";
import ButtonOverlay from "../dropdowns/ButtonOverlay";

export default class Canvas extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.addApp = this.addApp.bind(this);
        this.canvas = {};

        console.debug("Canvas initialised");
    }

    componentDidMount(){
        this.canvas = new Draw2DCanvas(this.props.id);
    }

    addApp(event){
        console.log("Add app requested. "+event.target.getAttribute("data-type"));
        let type = event.target.getAttribute("data-type");

        this.canvas.addNewObject(type);
    }

    render(){
        return <div id={this.props.id} className={"canvas"}>
            <ButtonOverlay addApp={this.addApp}/>
        </div>;
    }
}