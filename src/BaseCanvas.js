import CanvasPolicy from './CanvasPolicy'
import AppObject from './AppObject';

export default class BaseCanvas extends draw2d.Canvas{
    constructor(id, width, height){
        super(id, width, height);

        this.installEditPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());
        this.installEditPolicy(new CanvasPolicy());

        this.add(new AppObject(),100,100);
    }
}