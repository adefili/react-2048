import React from 'react';

class Grid extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
        <div id="grid">
            <div class="cell" id="cell_1" >{this.props.grid[0][0]}</div>
            <div class="cell" id="cell_2" >{this.props.grid[0][1]}</div>
            <div class="cell" id="cell_3" >{this.props.grid[0][2]}</div>
            <div class="cell" id="cell_4" >{this.props.grid[0][3]}</div>
            <div class="cell" id="cell_5" >{this.props.grid[1][0]}</div>
            <div class="cell" id="cell_6" >{this.props.grid[1][1]}</div>
            <div class="cell" id="cell_7" >{this.props.grid[1][2]}</div>
            <div class="cell" id="cell_8" >{this.props.grid[1][3]}</div>
            <div class="cell" id="cell_9" >{this.props.grid[2][0]}</div>
            <div class="cell" id="1cell_0">{this.props.grid[2][1]}</div>
            <div class="cell" id="1cell_1">{this.props.grid[2][2]}</div>
            <div class="cell" id="1cell_2">{this.props.grid[2][3]}</div>
            <div class="cell" id="1cell_3">{this.props.grid[3][0]}</div>
            <div class="cell" id="1cell_4">{this.props.grid[3][1]}</div>
            <div class="cell" id="1cell_5">{this.props.grid[3][2]}</div>
            <div class="cell" id="1cell_6">{this.props.grid[3][3]}</div>
        </div>
        )
    }
}

export default Grid;