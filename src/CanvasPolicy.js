export default class CanvasPolicy extends draw2d.policy.canvas.CanvasPolicy{
    constructor(){
        super();
    }

    onDoubleClick(the, x, y, shift, ctrl){
        console.log("Double Click");
    }
}