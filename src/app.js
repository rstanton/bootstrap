import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from './Alert';
import Header from './Header';
import Footer from './Footer';
import Canvas from './Canvas';
import Banner from './Banner';
import DiagramTabs from "./DiagramTabs";
import AppObject from "./AppObject";
import Droppable from 'jquery-ui/ui/widgets/droppable'

export default class App extends React.Component{
    constructor(props){
        super(props);

        console.log("Application Starting");
    }

    render() {
        return <div>
            <Header/>
            <div id="base" className={"container-fluid"}>
                <DiagramTabs/>
                <Footer/>
            </div>
        </div>
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
