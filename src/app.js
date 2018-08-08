import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from './Alert';
import Header from './Header';
import Footer from './Footer';
import Canvas from './Canvas';

export default class App extends React.Component{
    constructor(props){
        super(props);

        console.log("Application Starting");

        this.newTab = this.newTab.bind(this);
    }

    render() {
        return <div className={"container-fluid"}>
            <Header/>
            <div className={"row"}>
                <div className={"col"}>
                    <Alert type={"danger"} message={"Help"}/>
                </div>
                <div className={"col"}>Test</div>
                <div className={"col"}>Test</div>
                <div className={"col"}>Test</div>
            </div>
            <div>
                <ul className="nav nav-tabs" role={"tablist"}>
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#home" role={"tab"}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#two">Diagram #1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-name="octicon-book" data-toggle="tab" href="#two" onClick={this.newTab}>New</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade show active" role="tabpanel" id="home"><p>home content</p></div>
                <div className="tab-pane fade" role="tabpanel" id="two">
                    <Canvas/>
                </div>
            </div>
            <Footer/>
        </div>;
    }

    newTab(){
        console.debug("Adding new diagram tab");
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
