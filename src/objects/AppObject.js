import React, {Component} from 'react';
import ObjectPort from '../ObjectPort';
import "jquery-contextmenu/dist/jquery.ui.position";
import "jquery-contextmenu/dist/jquery.contextMenu";
import "jquery-contextmenu/dist/jquery.contextMenu.min.css";


export default class AppObject extends draw2d.shape.basic.Rectangle{
    constructor(attr) {
        super(attr);

        this.addLabel = this.addLabel.bind(this);
        this.addPort = this.addPort.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);



        this.setUserData({
            type:"Application"
        });

        this.addLabel();
        this.addPort(true);
        this.addPort(false);
    }

    addLabel(){
        let label = new draw2d.shape.basic.Label();
        label.setText(this.getUserData().type);
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

    /**
     * Show the application object context menu....
     * @param emitter
     * @param object
     */
    onContextMenu(emitter, object){
        console.debug("App Context Menu Requested");

        $.contextMenu({
            selector: "#canvas",
            build:function(){
                console.debug("Destroying any old context menus....");
                $.contextMenu('destroy','#canvas');
            },
            items:{
                props: {
                    name: "App Properties",
                    callback:function(){
                        console.debug("Destroying App Context Menu for "+this.id);
                    }.bind(this)
                }
            }
        });
    }
}