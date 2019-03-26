import React, {Component} from 'react';
import ObjectPort from '../ObjectPort';
import "jquery-contextmenu/dist/jquery.ui.position";
import "jquery-contextmenu/dist/jquery.contextMenu";
import "jquery-contextmenu/dist/jquery.contextMenu.min.css";


export default class AppObject extends draw2d.shape.basic.Rectangle{
    constructor(attr) {
        super(attr);

        this.addLabel = this.addLabel.bind(this);
        this.addAppPort = this.addAppPort.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);



        this.setUserData({
            type:"Application"
        });

        this.addLabel();
    }

    addLabel(){
        let label = new draw2d.shape.basic.Label();
        label.setText(this.getUserData().type);
        this.add(label, new draw2d.layout.locator.BottomLocator());
    }

    addAppPort(left){
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
            events:{
                    hide:function(){ $.contextMenu( 'destroy', '#canvas'); }
            },
            items:{
                props: {
                    name: "Properties",
                    callback:function(){
                        console.debug("Destroying App Context Menu for "+this.id);
                    }.bind(this)
                },
                rels:{
                    name:"Relationships",
                    callback:function(){

                    }.bind(this)
                },
                Port:{
                    name:"Add Port",
                    items:{
                        left:{
                            name:"Left",
                            callback: function(){
                                this.createPort("input");
                            }.bind(this)
                        },
                        right:{
                            name:"Right",
                            callback: function(){
                                this.createPort("output");
                            }.bind(this)
                        }
                    }
                }
            }
        });
    }
}