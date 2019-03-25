import CanvasPolicy from './CanvasPolicy'
import AppObject from '../objects/AppObject';

/**
 * This is run after the canvas element has been added to the DOM (after Canvas.componentDidMount) so can safely
 * reference the canvas's ID
 */
export default class SVGCanvas extends draw2d.Canvas{
    constructor(id, width, height) {
        if (width && height)
            super(id, width, height);
        else {
            super(id, $("#" + id).width, $("#" + id).height);
        }

        this.installEditPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());
        this.installEditPolicy(new CanvasPolicy());

        this.setDropListener = this.setDropListener.bind(this);

        this.setDropListener(id);

        let a1 = new AppObject({id: "one",
            type:"Application",
            name:"SAP for Retail"});

        let a2 = new AppObject({id: "two", type:"Application"});

        this.add(a1, 100, 100);
        this.add(a2, 160, 160);

    }

    setDropListener(id){
        $("#"+id).droppable({
            drop: function (event, ui) {
                console.info("Dropped. "+ui.draggable.attr("data-type"));
                let key = ui.draggable.attr("data-type");
                
                switch (key){
                    case 'toolCard':
                        console.debug("Ignoring dropped toolCard");
                        break;
                    case 'object':
                        console.debug("Dropped Object. Determining what....");
                        break;
                }
            }.bind(this)
        });
    }

}

