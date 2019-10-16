import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import DragAndDrop from "./components/DragAndDrop";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: null,
            hasFile: false
        };
    }

    handleDrop = (files) => {
        if(this.state.files.length > 0){
            this.setState({hasFile: true})
            this.setState({file: files})
        }
    }

    render() {
        return (
            <div className="container-fluid">
                {!this.state.hasFile ? (
                <DragAndDrop handleDrop={this.handleDrop}>
                    <div style={{height: 300, width: 250, backgroundColor: '#ffffff'}}>
                        {/*{this.state.file.map((file) =>
                            <div key={i}>{file}</div>
                        )}*/}
                    </div>
                </DragAndDrop>
                ) : (
                    <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
                )}
            </div>
        );
    }
}

export default App;
