import React, {Component} from 'react';
import "jquery-contextmenu/dist/jquery.ui.position";
import "jquery-contextmenu/dist/jquery.contextMenu";
import "jquery-contextmenu/dist/jquery.contextMenu.min.css";


export default class AppObject extends draw2d.shape.basic.Rectangle{
    constructor(attr) {
        super(attr);

        this.addLabel = this.addLabel.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);

        this.editor = attr.editor;

        this.attr({
            userData: {
                name:attr.name
            }
        });

        this.addLabel();
    }

    addLabel(){
        let label = new draw2d.shape.basic.Label();
        label.setText(this.userData.name);
        this.add(label, new draw2d.layout.locator.BottomLocator());
    }


    /**
     * Show the application object context menu....
     * @param emitter
     * @param object
     */
    onContextMenu(emitter, object){
        console.debug("App Context Menu Requested");

        $.contextMenu({
            selector: "#"+this.canvas.canvasId,
            events:{
                    hide:function(){ $.contextMenu( 'destroy', '#'+this.canvas.canvasId); }.bind(this)
            },
            items:{
                props: {
                    name: "Properties",
                    callback:function(){
                        //@Todo This needs to pass the details of the app that's been clicked across to the modal somehow, then when edited then that app needs to refresh
                        //Is this bad? Sets the id of the object to be edited, then displays the modal.
                        this.editor(this.id);
                        $('#card-modal').modal({
                        });
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