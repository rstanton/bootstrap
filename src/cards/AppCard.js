import React from 'react'

export default class AppCard extends React.Component{

    render(){
        console.log("app card re-render, No. Apps = "+this.props.apps.length);
        return <div id="card-modal" className={"modal fade"}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body"></div>
                </div>
            </div>
        </div>
    }
}