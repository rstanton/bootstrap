import React, {Component} from 'react';
import {OBJECT_SCHEMA} from '../Constants';

/**
 * props.readOnly will cause all fields to be readonly (for display purposes), otherwise will build a form for editing based on the object schema passed to it
 */
export default class ObjectDisplay extends Component{

    buildForm(){
        let objectID = this.props.id;

        this.applicationName = "SAP for Retail";

        let formgroups = [];
        for(let field in OBJECT_SCHEMA){
            let attr = OBJECT_SCHEMA[field];

            console.debug(field+" is "+attr.type);

            let fg = <div key={field} className={"form-group"}>
                <label htmlFor={field}>{attr.displayName}</label>
                <input type={attr.type} className="form-control" id={field} placeholder={attr.description} disabled={attr.readOnly || this.props.readOnly}/>
            </div>;

            formgroups.push(fg);
        }

        return formgroups;
    }

    render(){
        let formFields = this.buildForm();

        return <div className="card w-50">
            <div className="card-body">
                <h5 className="card-title">{this.applicationName}</h5>
                <form>
                    {formFields}
                </form>
                <a href="#" className="btn btn-primary">Save</a>
                <a href="#" className="btn btn-primary">Close</a>
            </div>
        </div>;
    }
}