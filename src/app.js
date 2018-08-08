import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from './Alert';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component{
    constructor(props){
        super(props);

        console.log("Application Starting");
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
            <div className={"row"}>
                <div className={"col"}>
                    <Alert type={"danger"} message={"Help"}/>
                </div>
                <div className={"col"}>Test</div>
                <div className={"col"}>Test</div>
                <div className={"col"}>Test</div>
            </div>
            <Footer/>
        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
