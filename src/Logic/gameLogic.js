function count_point(mat){
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

function add_two(mat){
    var a = Math.floor(Math.random() * mat.length);
    var b = Math.floor(Math.random() * mat.length);
    while(mat[a][b] !== 0){
        a = Math.floor(Math.random() * mat.length);
        b = Math.floor(Math.random() * mat.length);
    }
    mat[a][b] = 2;
    return mat;
}


