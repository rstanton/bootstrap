import CanvasPolicy from './CanvasPolicy'
import AppObject from '../objects/AppObject';

/**
 * This is run after the canvas element has been added to the DOM (after Canvas.componentDidMount) so can safely
 * reference the canvas's ID
 */
export default class Draw2DCanvas extends draw2d.Canvas{
    constructor(id, width, height, editor) {
        if (width && height)
            super(id, width, height);
        else {
            super(id, $("#" + id).width, $("#" + id).height);
        }

        this.id = id;
        this.editor = editor;
        this.installEditPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());
        this.installEditPolicy(new CanvasPolicy());

        this.setDropListener = this.setDropListener.bind(this);
        this.setDropListener(id);

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

