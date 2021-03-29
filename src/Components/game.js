import React from 'react';
import Grid from './grid.js';
import ScriptTag from 'react-script-tag';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            grid: [[0,0,0,0],
                   [0,0,0,0],
                   [0,0,0,0],
                   [0,0,0,0]],
            points: 0
        }
        this.test = this.test.bind(this);
    }

    test() {
        //alert(add_two(this.state.grid));
        //this.setState({grid: });        
    }

    
    render() {
        return(
        <div>
            <Grid grid={this.state.grid} 
                  points={this.state.points}
                  ref={this.gridRef}
                  handler={this.test}/>
        </div>
        )
    }
}

export default Game;