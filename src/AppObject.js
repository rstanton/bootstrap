import React from 'react';

export default class AppObject extends draw2d.SVGFigure{
    constructor(attr){
        super(attr);
    }

    getSVG(){
        console.log("Rendering Object");

        let x = "<svg width=\"580\" height=\"400\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            " <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->\n" +
            " <g>\n" +
            "  <title>Layer 1</title>\n" +
            "  <rect id=\"svg_1\" height=\"115\" width=\"195\" y=\"102\" x=\"125.5\" stroke-width=\"1.5\" stroke=\"#000\" fill=\"#ffff00\"/>\n" +
            " </g>\n" +
            "</svg>";

        return x;
 1    }

}