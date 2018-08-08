import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Canvas.css';

export default class Canvas extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);

        this.canvas = '';
    }

    componentDidMount(){
        this.canvas = new draw2d.Canvas("canvas");
    }

    render(){
        return <div id="canvas" className={"canvas"}/>;
    }
}