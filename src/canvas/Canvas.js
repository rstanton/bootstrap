import React from 'react';
import Draw2DCanvas from './Draw2DCanvas';
import './Canvas.scss';
import NewObjectButton from "../dropdowns/NewObjectButton";
import ButtonOverlay from "../dropdowns/ButtonOverlay";
import AppCard from '../cards/AppCard';
import AppObject from "../objects/AppObject";

export default class Canvas extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.addApp = this.addApp.bind(this);

        this.canvas = {}; //this is the actual draw2d canvas
        this.objects = []; //this will contain all the applications on the canvas

        this.state = {
            objects: []
        };

        console.debug("Canvas initialised");
    }

    componentDidMount(){
        this.canvas = new Draw2DCanvas(this.props.id);
    }

    addNewObject(type){
        let a1 = new AppObject({
            id: "one",
            type:type,
            name:type,
            canvas:this.id
        });

        let x = this.objects.push(a1);
        this.setState({
            objects:this.objects
        });
        console.debug("Canvas now contains "+x+" objects");

        this.canvas.add(a1, 100, 100);
    }

    addApp(event){
        console.log("Add app requested. "+event.target.getAttribute("data-type"));
        let type = event.target.getAttribute("data-type");

        this.addNewObject("app");
    }


    render(){
        return <div id={this.props.id} className={"canvas"}>
            <ButtonOverlay addApp={this.addApp}/>
            <AppCard apps={this.state.objects}/>
        </div>;
    }
}