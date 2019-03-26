import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './Footer';
import {DB} from './Constants';
import {OBJECT_SCHEMA} from './Constants';
import Tabs from "./tabs/Tabs";
import Droppable from 'jquery-ui/ui/widgets/droppable'

export default class App extends React.Component{
    constructor(props){
        super(props);

        console.debug("Application Starting");

        this.state = {
            catalogues: false,
            settings:false,
            diagrams: true
        };

        this.init();
    }

    init(){
        let db = new PouchDB(DB);

        db.info(function (err, info) {
            if (info.doc_count ==0 && info.update_seq == 0) {
                console.debug("First Boot. Setting up....");
            }
            else{
                console.debug("DB already setup");
            }
        });
    }

    render() {
        return <div>
            <Header/>
            <div id="base" className={"container-fluid"}>
                <Tabs/>
                <Footer/>
            </div>
        </div>
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
