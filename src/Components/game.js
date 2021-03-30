import React from 'react';
import Grid from './grid.js';
import keydown from 'react-keydown';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            grid: [[0,0,0,0],
                   [0,0,0,0],
                   [0,0,0,0],
                   [0,0,0,0]],
            size: 4,
            points: 0,
            game_state: "not over"
        }
        this.test1 = this.test1.bind(this);
        this.test2 = this.test2.bind(this);
        this.test3 = this.test3.bind(this);
        this.test4 = this.test4.bind(this);
        this.count_point = this.count_point.bind(this);
        this.add_two = this.add_two.bind(this);
        this.new_game = this.new_game.bind(this);
        this.game_state = this.game_state.bind(this);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
    }

    test1() {
        this.setState({grid: this.add_two(this.state.grid)});                
    }

    test2() {

        this.setState({grid: this.right(this.state.grid)[0]});
        //this.setState({grid: this.reverse(this.state.grid)}); 
        //this.setState({points: this.count_point(this.state.grid)});                
    }

    test3() {
        this.setState({grid: this.new_game(4)});         
    }

    test4() {
        this.setState({state: this.game_state(this.state.grid)});    
    }

    reset(){

    }

    new_game(n){
        //init game
        var matrix = [];
        for(var i = 0; i < n; i++){
            var temp = [];
            for(var j = 0; j < n; j++){
                temp.push(0);
            }
            matrix.push(temp);
        }
        return matrix;
    }

    count_point(mat){
        //count the points on board
        var point = 0;
        var n = 0;
        for(var i = 0; i < mat.length; i++){
            for(var j = 0; j < mat[i].length; j++){
                n = Math.floor(Math.sqrt(mat[i][j]))
                if(n > 1){
                    point += ((n - 1) * mat[i][j])
                }
            }
        }
        return point; 
    }
    
    add_two(mat){
        //add a 2 in a random position
        var a = Math.floor(Math.random() * mat.length);
        var b = Math.floor(Math.random() * mat.length);
        while(mat[a][b] !== 0){
            a = Math.floor(Math.random() * mat.length);
            b = Math.floor(Math.random() * mat.length);
        }
        mat[a][b] = 2;
        return mat;
    }

    game_state(mat){
        //check if there is a 2048
        for(var i = 0; i < mat.length; i++){
            for(var j = 0; j < mat[i].length; j++){
                if (mat[i][j]===2048){
                    return "win";
                }
            }
        }
        //check if there are some zeros
        for(var i = 0; i < mat.length; i++){
            for(var j = 0; j < mat[i].length; j++){
                if (mat[i][j]===0){
                    return "not over";
                }
            }
        }
        //check if ther is an equal number down or right (in a sub-matrix 3x3)
        for(var i = 0; i < mat.length - 1; i++){
            for(var j = 0; j < mat[i].length - 1; j++){
                if (mat[i][j]===mat[i+1][j] || mat[i][j+1]===mat[i][j]){
                    return "not over";
                }
            }
        }
        //check last rows
        for(var i = 0; i < mat.length - 1; i++){
            if (mat[mat.length-1][i+1] === mat[mat.length - 1][i]){
                return "not over";
            }
        }
        //check last column
        for(var i = 0; i < mat.length - 1; i++){
            if (mat[i][mat.length-1] === mat[i+1][mat.length-1]){
                return "not over";
            }
        }
        return "lose";
    }

    reverse(mat){
        var res = [];
        for(var i = 0; i < mat.length; i++){
            res.push([])
            for(var j = 0; j < mat[i].length; j++){
                res[i].push(mat[i][mat[0].length-j-1])
            }
        }
        return res
    }

    transpose(mat){
        var res = [];
        for(var i = 0; i < mat.length; i++){
            res.push([])
            for(var j = 0; j < mat[i].length; j++){
                res[i].push(mat[j][i])
            }
        }
        return res
    }

    cover_up(mat){
        var res = this.new_game(mat.length);
        var done = false;
        for(var i = 0; i < mat.length; i++){
            var count=0
            for(var j = 0; j < mat.length; j++){
                if (mat[i][j] !== 0){
                    res[i][count]=mat[i][j];
                    if(j !== count) done=true;
                    count++;
                }
            }
        }
        console.log(res);
        return [res,done];
    }

    merge(mat){
        var done = false
        for(var i = 0; i < mat.length; i++){
            for(var j = 0; j < mat.length - 1; j++){
                if (mat[i][j]==mat[i][j+1] && mat[i][j]!=0){
                    mat[i][j]*=2;
                    mat[i][j+1]=0;
                    done=true;
                }
            }
        }
        return [mat,done];
    }

    up(game){
        console.log("up");
        // return matrix after shifting up
        game = this.transpose(game);
        var res_cover = this.cover_up(game);
        game = res_cover[0];
        var done = res_cover[1];
        var temp = this.merge(game);
        game = temp[0];
        done = done || temp[1];
        game = this.cover_up(game)[0];
        game = this.transpose(game);
        return [game,done];
    }

    down(game){
        console.log("down")
        // return matrix after shifting up
        game = this.reverse(this.transpose(game));
        var res_cover = this.cover_up(game);
        game = res_cover[0];
        var done = res_cover[1];
        var temp = this.merge(game);
        game = temp[0];
        done = done || temp[1];
        game = this.cover_up(game)[0];
        game = this.transpose(this.reverse(game));
        return [game,done];
    }

    left(game){
        console.log("left")
        // return matrix after shifting left
        var res_cover = this.cover_up(game);
        game = res_cover[0];
        var done = res_cover[1];
        var temp = this.merge(game);
        game = temp[0];
        done = done || temp[1];
        game = this.cover_up(game)[0];
        return [game,done];
    }

    right(game){
        console.log("right")
        // return matrix after shifting right
        game = this.reverse(game);
        var res_cover = this.cover_up(game);
        game = res_cover[0];
        var done = res_cover[1];
        var temp = this.merge(game);
        game = temp[0];
        done = done || temp[1];
        game = this.cover_up(game)[0];
        game = this.reverse(game);
        return [game,done];
    }

    @keydown( 'enter' )
    key_down(event){
        var key = event;
        //key = repr(event.char)
        if (true/*key in self.commands*/){
            var temp = this.up(this.state.grid); //comando up etc
            this.setState({grid: temp[0]});
            var done = temp[1];
            if(done){
                this.setState({grid: this.add_two(this.state.grid)});
                this.setState({point: this.count_point(this.state.grid)});
            }
            else{
                if(this.game_state(this.state.grid) == 'win'){
                    alert("You Win!");
                }
                if(this.game_state(this.state.grid) == 'lose'){
                    alert("You Lose!");
                }
            }
        }
    }
    
    render() {
        return(
        <div>
            <Grid grid={this.state.grid} 
                  points={this.state.points}
                  state={this.state.state}
                  ref={this.gridRef}
                  handler1={this.test1}
                  handler2={this.test2}
                  handler3={this.test3}
                  handler4={this.test4}/>
        </div>
        )
    }
}

export default Game;