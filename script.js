let grid = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']];
let player = 'X';
let won = false;
let turns = 0;
function handleClick(r, c){
    if(!won){
        if(grid[r][c] == ' ')
        grid[r][c] = player;
        won = checkWin(r,c);
        if(won) document.getElementById("Win").innerHTML = player + " Won";
        turns++;
        document.getElementById(r+""+c).innerHTML = player;
        if(player == 'X'){
            player = 'O';
        }
        else player = 'X';
    }
    else if(turns == 9){
        document.getElementById("Win").innerHTML = "It was a Draw";
    }
}

function checkWin(r, c){
    if(grid[r][0] == grid[r][1] && grid[r][0] == grid[r][2] && grid[r][0] != ' '){
        document.getElementById(r+""+"0").style.backgroundColor = "yellow";
        document.getElementById(r+""+"1").style.backgroundColor = "yellow";
        document.getElementById(r+""+"2").style.backgroundColor = "yellow";
        return true;
    }
    if(grid[0][c] == grid[1][c] && grid[0][c] == grid[2][c] && grid[0][c] != ' '){
        document.getElementById("0"+c).style.backgroundColor = "yellow";
        document.getElementById("1"+c).style.backgroundColor = "yellow";
        document.getElementById("2"+c).style.backgroundColor = "yellow";
        return true;
    }
    if(grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2] && grid[0][0] != " "){
        document.getElementById("0"+"0").style.backgroundColor = "yellow";
        document.getElementById("1"+"1").style.backgroundColor = "yellow";
        document.getElementById("2"+"2").style.backgroundColor = "yellow";
        return true;
    }
    if(grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0] && grid[0][2] != " "){
        document.getElementById("0"+"2").style.backgroundColor = "yellow";
        document.getElementById("1"+"1").style.backgroundColor = "yellow";
        document.getElementById("2"+"0").style.backgroundColor = "yellow";
        return true;
    }
    return false;
}

function replay(){
    won = false;
    turns = 0;
    player = 'X';
    document.getElementById("Win").innerHTML = "Click on a box to play";
    for(let i = 0;i < 3;i++){
        for(let j = 0;j < 3;j++){
            document.getElementById(i+""+j).style.backgroundColor = "white";
            document.getElementById(i+""+j).innerHTML = "";
            grid[i][j] = ' ';
        }
    }
}
