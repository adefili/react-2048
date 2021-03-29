import React from 'react';

class Grid extends React.Component{
    constructor(props){
        super(props);
        this.button1 = this.button1.bind(this);
    }

    button1(){
        this.props.handler();
    }

    render() {
        return(
            <div class="all">
                <div class="Points">{this.props.points}</div>
                <div id="grid">
                    <div class="cell" id="cell_1" ><div class="internalCell">{this.props.grid[0][0]}</div></div>
                    <div class="cell" id="cell_2" ><div class="internalCell">{this.props.grid[0][1]}</div></div>
                    <div class="cell" id="cell_3" ><div class="internalCell">{this.props.grid[0][2]}</div></div>
                    <div class="cell" id="cell_4" ><div class="internalCell">{this.props.grid[0][3]}</div></div>
                    <div class="cell" id="cell_5" ><div class="internalCell">{this.props.grid[1][0]}</div></div>
                    <div class="cell" id="cell_6" ><div class="internalCell">{this.props.grid[1][1]}</div></div>
                    <div class="cell" id="cell_7" ><div class="internalCell">{this.props.grid[1][2]}</div></div>
                    <div class="cell" id="cell_8" ><div class="internalCell">{this.props.grid[1][3]}</div></div>
                    <div class="cell" id="cell_9" ><div class="internalCell">{this.props.grid[2][0]}</div></div>
                    <div class="cell" id="cell_10"><div class="internalCell">{this.props.grid[2][1]}</div></div>
                    <div class="cell" id="cell_11"><div class="internalCell">{this.props.grid[2][2]}</div></div>
                    <div class="cell" id="cell_12"><div class="internalCell">{this.props.grid[2][3]}</div></div>
                    <div class="cell" id="cell_13"><div class="internalCell">{this.props.grid[3][0]}</div></div>
                    <div class="cell" id="cell_14"><div class="internalCell">{this.props.grid[3][1]}</div></div>
                    <div class="cell" id="cell_15"><div class="internalCell">{this.props.grid[3][2]}</div></div>
                    <div class="cell" id="cell_16"><div class="internalCell">{this.props.grid[3][3]}</div></div>
                </div>
                <div class="Buttons" >
                    <div id="Button1" onClick={() => this.button1()}>test1</div>
                    <div id="Button2">test2</div>
                    <div id="Button3">test3</div>
                    <div id="Button4">test4</div>
                </div>
                
            </div>
        )
    }
}

export default Grid;