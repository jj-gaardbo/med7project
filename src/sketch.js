import image from './images/pitch.png';

export default function sketch(p){
    let bg;
    let canvas;

    p.setup = () => {
        p.createCanvas(1360, 916);
        bg = p.loadImage(image);
    };

    p.draw = () => {
        p.background(bg);
        p.ellipse(150, 100, 100, 100);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
        if(canvas) //Make sure the canvas has been created
            p.fill(newProps.color);
    };
}
