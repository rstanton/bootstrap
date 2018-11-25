import React from 'react';
import ObjectPort from './ObjectPort';
import contextMenu from 'jquery-contextmenu';

export default class AppObject extends draw2d.shape.basic.Rectangle{
    constructor(attr) {
        super(attr);

        console.debug(JSON.stringify(attr));

        this.addLabel = this.addLabel.bind(this);
        this.addPort = this.addPort.bind(this);

        this.addLabel();
        this.addPort(true);
        this.addPort(false);
    }

    addLabel(){
        let label = new draw2d.shape.basic.Label();
        label.setText("test");
        this.add(label, new draw2d.layout.locator.CenterLocator());
    }

    addPort(left){
        if(left){
            super.addPort(new ObjectPort(), new draw2d.layout.locator.LeftLocator());
        }
        else{
            super.addPort(new ObjectPort(), new draw2d.layout.locator.RightLocator());
        }
    }

    onContextMenu(x, y){
        console.info("Context Menu Requested");
        $.contextMenu({});
    }
}