import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Footer extends React.Component{
    render(){
        return <div className={"row"}>
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <a href={"#"}>(c)Ross Stanton</a>
            </nav>
        </div>;
    }
}