import React, {Component} from 'react';
import DiagramTabs from "./DiagramTabs";
import ObjectDisplay from '../panels/ObjectDisplay';

export default class TabContainer extends Component{
    render(){
        return <div><DiagramTabs/></div>;
    }
}