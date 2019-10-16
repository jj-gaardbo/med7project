import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

class App extends Component {
    constructor(){
        super();
        this.state = {color:[Math.random()*255, Math.random()*255, Math.random()*255]};
        this.randomColor = this.randomColor.bind(this);
    }

    randomColor(){
        this.setState({color:[Math.random()*255, Math.random()*255, Math.random()*255]}
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <button className="btn btn-primary btn-lg" onClick={this.randomColor}>Learn more</button>
                <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
            </div>
        );
    }
}

export default App;
