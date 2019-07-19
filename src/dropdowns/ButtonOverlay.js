import React from 'react';
import NewObjectButton from "./NewObjectButton";

export default class ButtonOverlay extends React.Component{
    render(){
        console.log("Rendering button overlay");

        return <div className={"p-4"}>
            <NewObjectButton addApp={this.props.addApp}/>
        </div>;
    }
}