import React from 'react';
import ObjectPort from './ObjectPort';
import "jquery-contextmenu/dist/jquery.ui.position";
import "jquery-contextmenu/dist/jquery.contextMenu";
import "jquery-contextmenu/dist/jquery.contextMenu.min.css";


export default class AppObject extends draw2d.shape.basic.Rectangle{
    constructor(attr) {
        super(attr);

        console.debug(JSON.stringify(attr));

        this.addLabel = this.addLabel.bind(this);
        this.addPort = this.addPort.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);

        this.addLabel();
        this.addPort(true);
        this.addPort(false);
    }

    addLabel(){
        let label = new draw2d.shape.basic.Label();
        label.setText("test");
        this.add(label, new draw2d.layout.locator.BottomLocator());
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
        console.info("Context Menu Requested, "+this.attr("id"));
       /* $.contextMenu({

            selector: "body",
            events:{
                hide:function() {
                    $.contextMenu("destroy");
                }
            },
            callback:function(key,opt) {
                console.info(key + " selected");
            },
            items: {
                edit: {
                    name: "Edit",
                    icon: "fa-edit",
                },
                props:{
                    name: "Properties",
                }
            },
            x:x,
            y:y*/
        //}
    }
}