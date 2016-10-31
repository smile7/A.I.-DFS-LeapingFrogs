var btn = document.getElementById("getNum");
var solutionHTML = document.getElementById("solution");
var state = [];
var left = 1;
var right = 2;
var mid = 0;

btn.addEventListener("click", function () {
    var num = document.getElementById("countOfFrogs").value;
    var n = parseInt(num);
    var success = false;
    
    for (var i = 0, j = 2 * n; i <= n - 1, j >= n + 1; i++, j--) {
        state[i] = left;
        state[j] = right;
    }
    state[n] = mid;
    
    var goal = state.slice();
    goal = goal.reverse();

    function dfs(state, route) {
        // check if a solution is found
        if (JSON.stringify(state) === JSON.stringify(goal) && !success) {
            success = true;
            console.log('I found a solution!\n');
            console.log(JSON.stringify(route));
            solutionHTML.innerHTML = JSON.stringify(route);
            return true;
        }
        
        var lenOfPositions = state.length;
        var zeroPos;
        
        // find the position of the zero
        for (zeroPos = 0; zeroPos < lenOfPositions; zeroPos++) {
            if (state[zeroPos] === 0) {
                break;
            }
        }
        
        var legalMoves = [];
        var indexOfFrogsThatCanMove;
        
        // check for legal moves
        for (indexOfFrogsThatCanMove = 0; indexOfFrogsThatCanMove < lenOfPositions; indexOfFrogsThatCanMove++) {
            var offset = Math.abs(indexOfFrogsThatCanMove - zeroPos);
            if (state[indexOfFrogsThatCanMove] === 1 && indexOfFrogsThatCanMove < zeroPos && offset <= 2) {
                legalMoves.push(indexOfFrogsThatCanMove);
            } else if (state[indexOfFrogsThatCanMove] === 2 && indexOfFrogsThatCanMove > zeroPos && offset <= 2) {
                legalMoves.push(indexOfFrogsThatCanMove);
            }
        }
        
        var lenOfLegalMoves = legalMoves.length;
        var newState;
        route = route || [state];
        
        // get new state and check if it is a solution
        for (indexOfFrogsThatCanMove = 0; indexOfFrogsThatCanMove < lenOfLegalMoves; indexOfFrogsThatCanMove++) {
            newState = swap(state, zeroPos, legalMoves[indexOfFrogsThatCanMove]);
            dfs(newState, route.concat([newState]));
        }
    }

    function swap(state, zero, frog) {
        var swappedState = state.slice();
        var temp0 = swappedState[zero];
        swappedState[zero] = swappedState[frog];
        swappedState[frog] = temp0;
        return swappedState;
    }
    
    dfs(state);
});