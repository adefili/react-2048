import React from 'react';

class Grid extends React.Component{
    constructor(props){
        super(props);
        this.button1 = this.button1.bind(this);
        this.button2 = this.button2.bind(this);
        this.button3 = this.button3.bind(this);
        this.button4 = this.button4.bind(this);
    }

    button1(){this.props.handler1();}
    button2(){this.props.handler2();}
    button3(){this.props.handler3();}
    button4(){this.props.handler4();}

    render() {
        return(
            <div className="all">
                <div id="Title">REACT 2048 With AI (Reinforcemnt Learning)</div>
                <div className="Points">{this.props.points}</div>
                <div className="Points">{this.props.reward}</div>
                <div id="grid">
                    <div class="cell" id="cell_1" ><div className="internalCell">{this.props.grid[0][0]}</div></div>
                    <div class="cell" id="cell_2" ><div className="internalCell">{this.props.grid[0][1]}</div></div>
                    <div class="cell" id="cell_3" ><div className="internalCell">{this.props.grid[0][2]}</div></div>
                    <div class="cell" id="cell_4" ><div className="internalCell">{this.props.grid[0][3]}</div></div>
                    <div class="cell" id="cell_5" ><div className="internalCell">{this.props.grid[1][0]}</div></div>
                    <div class="cell" id="cell_6" ><div className="internalCell">{this.props.grid[1][1]}</div></div>
                    <div class="cell" id="cell_7" ><div className="internalCell">{this.props.grid[1][2]}</div></div>
                    <div class="cell" id="cell_8" ><div className="internalCell">{this.props.grid[1][3]}</div></div>
                    <div class="cell" id="cell_9" ><div className="internalCell">{this.props.grid[2][0]}</div></div>
                    <div class="cell" id="cell_10"><div className="internalCell">{this.props.grid[2][1]}</div></div>
                    <div class="cell" id="cell_11"><div className="internalCell">{this.props.grid[2][2]}</div></div>
                    <div class="cell" id="cell_12"><div className="internalCell">{this.props.grid[2][3]}</div></div>
                    <div class="cell" id="cell_13"><div className="internalCell">{this.props.grid[3][0]}</div></div>
                    <div class="cell" id="cell_14"><div className="internalCell">{this.props.grid[3][1]}</div></div>
                    <div class="cell" id="cell_15"><div className="internalCell">{this.props.grid[3][2]}</div></div>
                    <div class="cell" id="cell_16"><div className="internalCell">{this.props.grid[3][3]}</div></div>
                </div>
                <div class="Buttons" >
                    <div id="Button1" onClick={() => this.button1()}>test1</div>
                    <div id="Button2" onClick={() => this.button2()}>test2</div>
                    <div id="Button3" onClick={() => this.button3()}>test3</div>
                    <div id="Button4" onClick={() => this.button4()}>Restart Game</div>
                </div>
                <div className="State">{this.props.state}</div>
                
            </div>
        )
    }
}

export default Grid;