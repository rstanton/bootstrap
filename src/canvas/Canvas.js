import React from 'react';
import SVGCanvas from './SVGCanvas';
import './Canvas.scss';

export default class Canvas extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);

        this.canvas = {};

        console.debug("Canvas initialised");
    }

    componentDidMount(){
        this.canvas = new SVGCanvas("canvas");
    }

    render(){
        return <div id="canvas" className={"canvas"}>
        </div>;
    }
}