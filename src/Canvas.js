import React from 'react';
import BaseCanvas from './BaseCanvas';
import './Canvas.scss';
import ToolCard from "./toolcard/ToolCard";

export default class Canvas extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);

        this.canvas = {};
        console.info("Canvas initialised");
    }

    componentDidMount(){
        this.canvas = new BaseCanvas("canvas");
    }

    render(){
        return <div id="canvas" className={"canvas"}>
            <ToolCard/>
        </div>;
    }
}