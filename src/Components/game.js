import React from 'react';
import Grid from './grid.js';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            grid: [[1,2,3,4],
                   [5,6,7,8],
                   [9,10,11,12],
                   [13,14,15,16]]
        }
    }

    
    render() {
        return(
        <div>
            <Grid grid={this.state.grid}/>
        </div>
        )
    }
}

export default Game;