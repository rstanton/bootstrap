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
        this.addObject = this.addObject.bind(this);
        this.editObject = this.editObject.bind(this);

        this.canvas = {}; //this is the actual draw2d canvas
        this.objects = []; //this will contain all the applications on the canvas

        this.state = {
            objects: new Map(),
            app:{}}
        ;

        console.debug("Canvas initialised");
    }

    componentDidMount(){
        this.canvas = new Draw2DCanvas(this.props.id,null,null,this.editObject);
    }

    addNewObject(type){
        let a1 = new AppObject({
            id: Math.floor((Math.random() * 1000) + 1),
            type:type,
            name:type,
            canvas:this.id,
            editor: this.editObject
        });

        let map = this.state.objects;
        map.set(a1.id, a1);

        this.setState({
            objects:map
        });

        this.canvas.add(a1, 100, 100);
        console.debug("Canvas now contains "+x+" objects");
    }

    addObject(event){
        console.log("Add Object Requested. "+event.target.getAttribute("data-type"));
        let type = event.target.getAttribute("data-type");

        this.addNewObject("app");
    }

    editObject(id){
        console.log("Editing Object with id "+id);

        let map = this.state.objects;
        this.setState({
            app: map.get(id)
        });
        //This should change the state so that there is an object to be edited, which will refresh AppCard
    }

    updateApp(event){

    }

    render(){
        return <div id={this.props.id} className={"canvas"}>
            <ButtonOverlay addApp={this.addObject}/>
            <AppCard app={this.state.app} save={this.updateApp}/>
        </div>;
    }
}